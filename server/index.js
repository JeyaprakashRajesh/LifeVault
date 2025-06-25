require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

connectDB();

app.use('/api/user', userRoutes);

app.get('/', (req, res) => res.send('LifeVault API running'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
