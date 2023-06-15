const express = require('express');
const cors = require('cors')
const cookies = require('cookie-parser')
const app = express();
require('dotenv').config();
const port = process.env.API_PORT;
require("./config/mongoose.config");

app.use(cors())

app.use(express.json(), cookies(), express.urlencoded({ extended: true }));
// Route section
const UserRoutes = require("./routes/user.routes")
UserRoutes(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));