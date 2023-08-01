import axios from "axios";

const signUp = async (req, res) => {

    axios.post(process.env.SERVICE_AUTH_URL + "/auth/signup", req.body).then(response => {
            if (response.status !== 200) {
                res.status(response.status).json(response.data);
            }
            res.json(response.data);
        }).catch(error => {
            res.status(500).json({ message: "Server error"});
    })
};

const signIn = async (req, res) => {

    axios.post(process.env.SERVICE_AUTH_URL + "/auth/signin", req.body).then(response => {
            if (response.status !== 200) {
                res.status(response.status).json(response.data);
            }
            res.json(response.data);
        }).catch(error => {
            res.status(500).json({ message: "Server error"});
    })
}


export { signUp, signIn };