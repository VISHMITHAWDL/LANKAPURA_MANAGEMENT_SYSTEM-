import ManagerProfileService from "../services/managerProfileService.js";

class ProfileController {

    async createProfile(req, res) {
        try {
            const profileData = req.body;
            const userId = req.user.id;
            const newProfile = await ManagerProfileService.createProfile({ ...profileData, userId });
            return res.status(201).json(newProfile);
        } catch (error) {
             return res.status(500).json({ message: error.message });
        }
    }

    async getProfileByUserId(req, res) {
        try {
            const userId = req.user.id; // assuming authentication middleware sets this
            const profile = await ManagerProfileService.getProfileByUserId(userId);
            return res.status(200).json(profile);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

}


export default new ProfileController();







