const express = require('express');
const cors = require('cors');
const fetch = require('fetch');

const app = express();

app.use(cors());

app.get('/api/data', cors(), async function(req, res, next) {
    
})