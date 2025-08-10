import streamifier from 'streamifier';
import EmployeeProfileService from "../service/employeeProfileService.js";
import cloudinary from "../../../utils/cloudinary.js";

const uploadToCloudinary = (buffer, folder = 'profiles') =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: 'image' },
      (err, result) => (err ? reject(err) : resolve(result))
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });

class ProfileController {

    async createProfile(req, res) {
        try {
            const profileData = req.body;
            const userId = req.user.id;          
            // const newProfile = await EmployeeProfileService.createProfile({ ...profileData, userId });

            // Single image only: prefer req.file (binary) else body.profileImage (string URL/base64)
            const opts = {
                folder: "profile_images",
                resource_type: "image",
                allowed_formats: ["jpg", "png", "webp", "gif"],
            };

            let imageUrl;
            if (req.file && req.file.buffer) {
                const up = await uploadToCloudinary(req.file.buffer, opts.folder);
                imageUrl = up?.secure_url;
            } else if (typeof profileData?.profileImage === 'string' && profileData.profileImage.trim()) {
                const up = await cloudinary.uploader.upload(profileData.profileImage, opts);
                imageUrl = up?.secure_url;
            }

            const payload = {
                ...profileData, userId,
                ...(imageUrl ? { profileImage: imageUrl } : {}),
            };

            const newProfile = await EmployeeProfileService.createProfile(payload);
            console.log("New profile created:", newProfile);

            return res.status(201).json(newProfile);
        } catch (error) {
            console.error("Error creating profile:", error.message);
           return res.status(500).json({ message: error.message });
        }
        
    }

    

    async getProfileByUserId(req, res) {
        try {
            const userId = req.user.id; // assuming authentication middleware sets this
            const profile = await EmployeeProfileService.getProfileByUserId(userId);
            return res.status(200).json(profile);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

}

export default new ProfileController();