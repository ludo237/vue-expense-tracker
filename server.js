const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: '.env' });

const server = express();

server.use('/api/v1/', require('./routes'));

server.listen(process.env.PORT, console.log(`Server up on port ${process.env.PORT}`));
