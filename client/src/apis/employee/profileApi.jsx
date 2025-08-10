import { toast } from 'react-toastify';
import axios from 'axios';
import VITE_API_BASE_URL from '../Const';


const profileApi = () => {

    // Create/Update profile using multipart form-data (expects FormData)
    const updateProfile = async (formData, token) => {
        try {
            const response = await axios.post(
                `${VITE_API_BASE_URL}/employee/create-profile`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                    withCredentials: true,
                }
            );
            if (response.status === 201) {
                toast.success('Profile saved');
            } else {
                toast.error('Failed to save profile');
            }
            return response.data;
        } catch (err) {
            const msg = err?.response?.data?.message || err.message || 'Request failed';
            toast.error(msg);
            throw err;
        }
    };

    // Fetch current user's profile (requires auth if backend enforces it)
    const getProfile = async (token) => {
        try {
            const response = await axios.get(
                `${VITE_API_BASE_URL}/employee/profile`,
                {
                    withCredentials: true,
                    headers: {
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                }
            );
            return response.data;
        } catch (err) {
            const msg = err?.response?.data?.message || err.message || 'Fetch failed';
            toast.error(msg);
            throw err;
        }
    };

    return {
        getProfile,
        updateProfile,
    };
};


export default profileApi;