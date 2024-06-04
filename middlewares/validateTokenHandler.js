const jwt = require("jsonwebtoken");
const { config } = require("../config");

const validateToken = (permissions) => {
  return async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
            jwt.verify(token, config.accessToken, (err, decoded) => {
                if (err) {
                    res.status(401).json("User is not authorized");
                    return;
                }
                else if(!permissions.includes(decoded.user.role)) {
                    res.status(401).json("User does not have permission "+decoded.user.role);
                    return;
                }
                req.user = decoded.user;
                next();
            });

        }
        if (!token) {
            res.status(401).json("User is not authorized or token is missing");
            return;
        }
    };
}
module.exports = validateToken;

