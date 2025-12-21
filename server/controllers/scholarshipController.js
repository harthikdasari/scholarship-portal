const Application = require('../models/Application');
const User = require('../models/User');

const applyForScholarship = async (req, res) => {
    try {
        const { studentId, institutionId, formDetails, documents } = req.body;

        const student = await User.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const application = await Application.create({
            studentId,
            studentName: student.name,
            studentEmail: student.email,
            studentState: student.state,
            institutionId,
            formDetails,
            documents: documents || {}
        });

        res.status(201).json({ message: 'Application submitted', application });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getStudentApplications = async (req, res) => {
    try {
        const { studentId } = req.params;
        const applications = await Application.find({ studentId });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { applyForScholarship, getStudentApplications };
