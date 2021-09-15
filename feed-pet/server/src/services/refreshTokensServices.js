// const { OAuth2Client } = require('google-auth-library');
// const { randomBytes } = require("crypto");
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const ms = require("ms");
const { Usuario, RefreshToken } = require("../models"); 

async function criarRefreshToken(sub) {
    const refreshTokenExpiration = Date.now() + ms(process.env.REFRESH_TOKEN_EXPIRATION);    
    const newRefreshToken = jwt.sign(
        { sub }, 
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

function criarAccessToken(sub) {
    const token = jwt.sign(
        { sub }, 
        process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );

    return token;
}

// async function loginGoogle(token) {
//     const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
//     const client = new OAuth2Client(CLIENT_ID);

//     try {
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: CLIENT_ID,
//         });
    
//         const payload = ticket.getPayload();      
        
//         console.log(payload);

//         const [ user ] = await User.findOrCreate({
//             where: {
//                 email: payload.email
//             },
//             defaults: {
//                 name: payload.name,
//                 password: randomBytes(16).toString("hex"),
//                 avatar: payload.picture
//             }
//         });

//         const accessToken = await criarAccessToken(user.id);
//         const refreshToken = await criarRefreshToken(user.id);

//         return { accessToken, refreshToken };
//     } catch (err) {
//         console.log(err);
//         throw new createHttpError(401, "Invalid Google Token");
//     }   
// }

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

    // const accessToken = criarAccessToken(usuarioRegistrado.id);
    const refreshToken = criarRefreshToken(usuarioRegistrado.id);
    
    return { refreshToken };
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

    const accessToken = criarAccessToken(validRefreshToken.Usuario.id);
    const newRefreshToken = await criarRefreshToken(validRefreshToken.Usuario.id);
    
    return { accessToken, refreshToken: newRefreshToken };
}

module.exports = {
    // loginGoogle,
    loginUserCredentials,
    refreshTokens,
    criarRefreshToken
};