const studentService = require('../services/studentService');

const validateStudentApproval = async (req, res) => {
    const studentId = req.params.id;
    try {
        const approvedStudentData = await studentService.checkApproval(studentId);
        res.status(200).json(approvedStudentData);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

module.exports = { validateStudentApproval };