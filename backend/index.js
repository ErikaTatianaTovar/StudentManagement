const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const studentController = require('./controllers/studentController');
const authenticateToken = require('./middlewares/authenticateToken');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.post('/register', authController.register);
app.post('/login', authController.login);
app.get('/users/:email', authenticateToken, userController.getUserByEmail);
app.post('/students/:id/approval', authenticateToken, studentController.validateStudentApproval);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
