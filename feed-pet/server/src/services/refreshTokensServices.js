const { OAuth2Client } = require('google-auth-library');
const { randomBytes } = require("crypto");
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const ms = require("ms");
const { Usuario, RefreshToken } = require("../models"); 
require("dotenv").config();

async function verifyTokenGoogle(googleToken) {
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(CLIENT_ID);


        const ticket = await client.verifyIdToken({
            idToken: googleToken,
            audience: CLIENT_ID,
        });

        return ticket.getPayload(); 
   
}

async function criarRefreshToken(sub, cargo) {
    const refreshTokenExpiration = Date.now() + ms(process.env.REFRESH_TOKEN_EXPIRATION);    
    const newRefreshToken = jwt.sign(
        { sub, cargo }, 
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: refreshTokenExpiration }
    );
    try {
        const [refreshToken, created] = await RefreshToken.findOrCreate({
            where: { user_id: sub },
            defaults: {
                token: newRefreshToken,
                expiresIn: refreshTokenExpiration
            }
        });
    
        if (!created) {
            refreshToken.token = newRefreshToken;
            refreshToken.expiresIn = refreshTokenExpiration;
            await refreshToken.save();
        }
        
        return newRefreshToken;
    } catch (error) {
        console.log(error);
        throw new createHttpError(500, "Refresh token creation error");
    }        
}

function criarAccessToken(sub, cargo) {
    console.log(`${process.env.ACCESS_TOKEN_SECRET} AA`)
    const token = jwt.sign(
        { sub, cargo}, 
        process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );

    return token;
}

async function loginGoogleUser(token) {
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(CLIENT_ID);


    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
    
        const payload = ticket.getPayload();      
        
        console.log(payload);

        const [ user ] = await Usuario.findOrCreate({
            where: {
                email: payload.email
            },
            defaults: {
                nome: payload.name,
                email: payload.email,
                senha: randomBytes(16).toString("hex"),
                avatar: payload.picture,
                cargo: "usuario"
            }
        });

        const accessToken = criarAccessToken(user.id);
        const refreshToken = await criarRefreshToken(user.id);

        return { accessToken, refreshToken };
    } catch (err) {
        console.log(err);
        throw new createHttpError(401, "Invalid Google Token");
    }   
}

async function loginUserCredentials(userCredeentials) {
    const { email, password } = userCredeentials;

    const usuarioRegistrado = await Usuario.findOne({ where: { email } });    
    console.log(usuarioRegistrado)
    if (!usuarioRegistrado) {
        throw new createHttpError(401, "E-mail ou senha inválidos.");
    }

    const isPasswordValid = usuarioRegistrado.verificarSenha(password);

    if (!isPasswordValid) {
        throw new createHttpError(401, "E-mail ou senha inválidos.");
    }

    const accessToken = criarAccessToken(usuarioRegistrado.id, usuarioRegistrado.cargo);
    const refreshToken = await criarRefreshToken(usuarioRegistrado.id, usuarioRegistrado.cargo);

    
    return { accessToken, refreshToken };
}

async function refreshTokens(refreshToken) {
    const validRefreshToken = await RefreshToken.findOne({
        where: {
            token: refreshToken
        },
        include: "usuario"
    });

    if (!validRefreshToken) {
        throw new createHttpError(401, "Invalid refresh-token");
    }

    const accessToken = criarAccessToken(validRefreshToken.usuario.id, validRefreshToken.usuario.cargo);
    const newRefreshToken = await criarRefreshToken(validRefreshToken.usuario.id);
    
    return { accessToken, refreshToken: newRefreshToken };
}

module.exports = {
    loginGoogleUser,
    loginUserCredentials,
    refreshTokens,
    criarRefreshToken,
    verifyTokenGoogle
};