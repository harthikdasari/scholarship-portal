const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'institution'], required: true },
    state: { type: String, required: true },
    institutionCode: { type: String } // Only for institutions
});

module.exports = mongoose.model('User', userSchema);
