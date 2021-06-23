'use strict';

const express = require('express');
const cors = require('cors');

const handler = (request, response) => {
    response.status(200).json("OK");
}

const app = express();
app.use(cors());
app.use(handler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening to :3000"));
