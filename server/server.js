const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const routes = require('../routes/routes');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes);

app.listen(port, () => { console.log(`API is running on http://localhost:${port}`) });