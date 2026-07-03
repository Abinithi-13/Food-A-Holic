import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipe.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recipe", recipeRoutes)

 const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Backend running on port ${PORT} `)
})