const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const ipRouter = require('./routers/iphoneRouter');
dotenv.config();

//connect data base
mongoose.connect((process.env.MONGOOSE_URL),
    function () {
        console.log('connected database monggoose....');
    }
);

//use option 
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan('common'));

// create port 
app.listen(port,
    function () {
        console.log('Server is running at port: ' + port);
    }    
);

// use router
app.use('/api/iphone', ipRouter);


