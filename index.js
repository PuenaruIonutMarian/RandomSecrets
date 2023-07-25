import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";


app.use(express.static("public"));

app.get("/", async (req, res) => {
    try{
    const randomSecret = await axios.get(API_URL);
    const message = randomSecret.data.secret;
    const userName = randomSecret.data.username;
  res.render("index.ejs", { secret: message, user:userName });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});