const jwt = require("jsonwebtoken");

const generateAccessToken = (id)=>{

    return jwt.sign(

        {id},

        process.env.JWT_SECRET,

        {
            expiresIn:
            process.env.ACCESS_TOKEN_EXPIRY
        }

    );
};

const generateRefreshToken = (id)=>{

    return jwt.sign(

        {id},

        process.env.JWT_REFRESH_SECRET,

        {
            expiresIn:
            process.env.REFRESH_TOKEN_EXPIRY
        }

    );
};

module.exports = {
    generateAccessToken,
    generateRefreshToken
};