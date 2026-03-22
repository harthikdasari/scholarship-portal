const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock Data Store
const { users, applications } = require('./data/store');

// Routes
const authRoutes = require('./routes/auth');
const scholarshipRoutes = require('./routes/scholarship');
const verificationRoutes = require('./routes/verification');

app.use('/api/auth', authRoutes);
app.use('/api/scholarship', scholarshipRoutes);
app.use('/api/verification', verificationRoutes);

app.get('/', (req, res) => {
    res.send('Scholarship Verification System API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
