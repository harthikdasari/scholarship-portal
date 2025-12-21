const User = require('../models/User');

const register = async (req, res) => {
    try {
        const { name, email, password, role, state, institutionCode } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role,
            state,
            institutionCode
        });

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && user.password === password) { // In prod, use bcrypt
            res.json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getInstitutions = async (req, res) => {
    try {
        const institutions = await User.find({ role: 'institution' });
        res.json(institutions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register, login, getInstitutions };
