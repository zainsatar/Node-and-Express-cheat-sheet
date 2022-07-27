const express = require("express")
require("./src/db/connection")

const router = require("./src/routers/menRouters")

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(router)




app.listen(port, () => {
    console.log(`listening to port ${port}`)
})