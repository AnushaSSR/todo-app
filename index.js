const express = require('express');

const port = 8000;

const app = express();


app.listen(port, function(err) {
    if(err){
        console.log(`Not up, Error in setting up the server: ${err}`);       
    }

    console.log(`Port is up and running : ${port}`);
});