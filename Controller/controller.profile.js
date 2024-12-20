import Profile from '/home/avik-ghosh/project_1/profile.js';

// Create a new profile
export const createProfile = async (req, res) => {
    try {
        const { name, username, password, image, location, seller } = req.body;

        // Validate required fields
        if (!name || !username || !password || !image || !location) {
            return res.status(400).json({ error: 'All required fields must be provided.' });
        }

        // Create and save the profile
        const profile = new Profile({ name, username, password, image, location, seller });
        await profile.save();

        res.status(201).json({ message: 'Profile created successfully.', profile });
    } catch (error) {
        if (error.code === 11000) {
            // Handle unique constraint violation (e.g., duplicate username)
            res.status(400).json({ error: 'Username already exists. Please choose a different username.' });
        } else {
            res.status(500).json({ error: 'Failed to create profile.', details: error.message });
        }
    }
};

// Get all profiles
export const getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profiles.', details: error.message });
    }
};

// Get a profile by ID
export const getProfileById = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findById(id);

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found.' });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile.', details: error.message });
    }
};

// Update a profile by ID
export const updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const profile = await Profile.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found.' });
        }

        res.status(200).json({ message: 'Profile updated successfully.', profile });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update profile.', details: error.message });
    }
};

// Delete a profile by ID
export const deleteProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findByIdAndDelete(id);

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found.' });
        }

        res.status(200).json({ message: 'Profile deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete profile.', details: error.message });
    }
};
