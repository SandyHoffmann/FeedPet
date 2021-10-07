const usuariosServices = require("../services/usuariosServices");
const refreshTokensServices = require("../services/refreshTokensServices");

async function login(req, res, next) {
    try {
        const tokens = await refreshTokensServices.loginUserCredentials(req.body);        

        res.json(tokens);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function loginGoogle(req, res, next) {
    try {
        const { token } = req.body;        
        
        const tokens = await refreshTokensServices.loginGoogleUser(token);

        res.json(tokens);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function refresh(req, res, next) {
    try {
        const { refreshToken } = req.body;

        const tokens = refreshTokensServices.refreshTokens(refreshToken);

        res.json(tokens);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    login,
    loginGoogle,
    refresh
}