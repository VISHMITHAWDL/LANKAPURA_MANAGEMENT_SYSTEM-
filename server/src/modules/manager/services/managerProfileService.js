import highProfile from "../module/highProfile.js";

class ManagerProfileService {

    async createProfile(profileData) {
        try {
            const newProfile = await highProfile.create(profileData);
            return newProfile;
        } catch (error) {
            console.error("MongoDB Error:", error.message); // 👈 log the real error
            throw new Error(error.message);
        }
    }

    async getProfileByUserId(userId) {
        try{
            const profile = await highProfile.findOne({ userId }).populate('userId');
            if (!profile) {
                throw new Error("Profile not found");
            }
            return profile;
        }catch(error){
            throw new Error("Error fetching profile");
        }        
    }



}

export default new ManagerProfileService();
























