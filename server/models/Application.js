const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studentName: { type: String, required: true },
    studentEmail: { type: String },
    studentState: { type: String, required: true },
    institutionId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    formDetails: {
        course: String,
        gpa: String
    },
    documents: {
        'Income Certificate': String,
        'Caste Certificate': String
    },
    status: { type: String, default: 'Pending' }, // Pending, Institution Verified, Rejected
    remarks: { type: String },
    appliedDate: { type: Date, default: Date.now },
    institutionVerifiedDate: { type: Date }
});

module.exports = mongoose.model('Application', applicationSchema);
