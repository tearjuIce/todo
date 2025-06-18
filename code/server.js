// server.js
import express from "express";
import cors from "cors";
import db from "./app/models/index.js";
import authRoutes from "./app/routes/auth.routes.js";
import userRoutes from "./app/routes/user.routes.js";
 
const app = express();
 
const corsOptions = {
    origin: process.env.BASE_URL,
};
 
app.use(cors(corsOptions));
 
// Parse requests of content-type - application/json
app.use(express.json());
 
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
 
// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Node.js JWT Authentication application." });
});
 
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", userRoutes);
 
// Set port, listen for requests
const PORT = process.env.PORT || 8080;
 
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
});