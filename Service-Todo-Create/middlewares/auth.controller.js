
const tokenValidation = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if(!token) return res.status(403).json({message: "No token provided"});

    next();
}