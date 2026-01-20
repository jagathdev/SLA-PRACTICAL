import http from 'http'
import fs from 'fs'

const server = http.createServer();

server.listen(5000, () => {
    console.log("Server Working")
})


fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {

        console.log(err)
    }
    else {
        console.log("data", data.txt)
    }
})