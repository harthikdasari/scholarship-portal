const Application = require('../models/Application');

const getPendingApplications = async (req, res) => {
    try {
        const { institutionId } = req.params;
        const pendingApps = await Application.find({ institutionId });
        res.json(pendingApps);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const verifyApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, remarks } = req.body;

        const application = await Application.findById(id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        application.status = status;
        if (remarks) application.remarks = remarks;
        application.institutionVerifiedDate = new Date();

        await application.save();

        res.json({ message: `Application ${status}`, application });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getPendingApplications, verifyApplication };
