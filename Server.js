const express  = require('express');
const dotenv = require('dotenv');
dotenv.config();
const dbConnect = require('./Config/DBConnection');
const userRoutes = require("./Route/UserRoute");
const { errorHandler } = require("./middleware/ErrorHandle");
const cors = require("cors");
const app = express();
app.use(cors());
dbConnect()
app.use(express.json());
const port = 5500;

app.get('/' , (req,res) => {
    res.send('Server is Running');
})



app.use("/api", userRoutes);

//err handler
// app.use(notFound);
app.use(errorHandler);

app.listen(port , console.log(`Server is listening on ${port}`));