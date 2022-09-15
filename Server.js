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

app.get('/' , (req,res) => {
    res.send('Server is Running');
})



app.use("/api", userRoutes);

//err handler
// app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000 , console.log(`Server is listening on ${process.env.PORT}`));