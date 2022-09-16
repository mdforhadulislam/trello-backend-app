require("dotenv").config()
const https = require("https")
const app = require("./app/app")

const server = https.createServer(app)
const port = process.env.PORT || 5000


server.listen(port, () => {
    console.log(`Server Running Port http://localhost:${port}`);
  });
