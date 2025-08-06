import AuthService from '../service/authService.js';

class AuthController {

    async login(req, res) {
        const { email, password } = req.body;
        try{
            const result = await AuthService.login(email, password);
            res.status(200).json(result);
        }catch(error){ 
            const errorMessage = error.message || "Internal Server Error";
            if (errorMessage === "User not found" || errorMessage === "Invalid credentials") {
                res.status(401).json({ error: errorMessage });
            }
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    async registerByAdmin(req, res) {
        const { username, email, password } = req.body;
        try {
            const result = await AuthService.register(username, email, password);
            res.status(201).json(result);
        } catch (error) {
            const errorMessage = error.message || "Internal Server Error";
            if (errorMessage === "User already exists") {
                res.status(409).json({ error: errorMessage });
            } else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }

    async changePassword(req, res) {
        const { oldPassword, newPassword } = req.body;
        const userId = req.user.id;

        try {
            const result = await AuthService.changePassword(userId, oldPassword, newPassword);
            res.status(200).json(result);
        } catch (error) {
            const errorMessage = error.message || "Internal Server Error";
            if (errorMessage === "Old password is incorrect") {
                res.status(401).json({ error: errorMessage });
            } else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }

}

export default new AuthController();