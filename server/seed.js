const mongoose = require('mongoose');
const User = require('./models/User');
const connectDB = require('./config/db');

// Connect to DB
connectDB();

const institutions = [
    {
        name: "IIT Bombay",
        email: "iitb@gmail.com",
        password: "password123",
        role: "institution",
        state: "Maharashtra",
        institutionCode: "IITB001"
    },
    {
        name: "Osmania University",
        email: "osmania@gmail.com",
        password: "password123",
        role: "institution",
        state: "Telangana",
        institutionCode: "OUHYD01"
    },
    {
        name: "Andhra University",
        email: "au@gmail.com",
        password: "password123",
        role: "institution",
        state: "Andhra Pradesh",
        institutionCode: "AUVIZ01"
    },
    {
        name: "JNTU Hyderabad",
        email: "jntu@gmail.com",
        password: "password123",
        role: "institution",
        state: "Telangana",
        institutionCode: "JNTUH01"
    },
    {
        name: "Bangalore University",
        email: "bu@gmail.com",
        password: "password123",
        role: "institution",
        state: "Karnataka",
        institutionCode: "BUBLR01"
    },
    {
        name: "Visvesvaraya Technological University",
        email: "vtu@gmail.com",
        password: "password123",
        role: "institution",
        state: "Karnataka",
        institutionCode: "VTU001"
    }
];

const seedData = async () => {
    try {
        await User.deleteMany({ role: 'institution' }); // Clear existing institutions
        await User.insertMany(institutions);
        console.log('Institutions Seeded Successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
