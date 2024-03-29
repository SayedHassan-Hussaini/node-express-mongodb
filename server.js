import dotenv from "dotenv"
dotenv.config({path:"./config.env"})
import app from "./app.js"


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is ready to port ${port}...`);
});