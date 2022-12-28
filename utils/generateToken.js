const jwt = require("jsonwebtoken")
const UserToken = new (require("../models/UserToken.js"))()

const generateTokens = async (user) => {
    try {
        const payload = { _id: user._id, roles: user.roles };
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_PRIVATE_KEY,
            { expiresIn: "14m" }
        );
        const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_PRIVATE_KEY,
            { expiresIn: "30d" }
        );

        const userToken = await UserToken.where("userId", user._id);
        if (!userToken.error) await UserToken.delete(userToken.id);

        await UserToken.create({ userId: user._id, token: refreshToken })
        return Promise.resolve({ accessToken, refreshToken });
    } catch (err) {
        return Promise.reject(err);
    }
};

module.exports = generateTokens;