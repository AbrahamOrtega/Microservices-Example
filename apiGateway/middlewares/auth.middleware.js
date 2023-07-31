import axios from "axios";
const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    axios.post(process.env.SERVICE_AUTH_URL + "/verifyToken",
        {
            headers: {
                'content-type': 'application/json',
                'x-access-token': token
            }

        }).then(response => {
            console.log(response);
            next();
        }  ).catch(error => {
            console.log(error);
            res.status(403).json({ message: "Token is invalid"});
    })
};

export { verifyToken };