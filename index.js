'use strict';

const express = require('express');
const cors = require('cors');

const handler = (request, response) => {
    response.status(200).json("OK");
}

const app = express();
app.use(cors());
app.use(handler);

app.listen(3000, () => console.log("Listening to :3000"));
