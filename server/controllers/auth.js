const admin = require('../config/firebase');

exports.registerUser = async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
        });

        res.status(201).json({
            message: 'User created successfully',
            uid: userRecord.uid,
        })
    } catch(error) {
        if (error.code === 'auth/email-already-exists') {
            return res.status(409).json({ error: 'The email address is already in use.' });
        }
        res.status(500).json({ message: 'Internal server error'});
    }
};