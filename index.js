// const express = require('express');


// const app = express();

// app.set('port', process.env.PORT || 3000);
// app.set(index.html)

// app.listen(app.get('port'), () => {
//     console.log('Server on port', app.get('port'));
// });


const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./bundle.html')
    read.pipe(res)
})

server.listen(3000)
console.log(`Server on port ${3000}`)