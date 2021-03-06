const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: '.env' });

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.info(`DB online: ${connection.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
connectDB();

const server = express();

// Global cors enable
server.use(cors());
// This allow us to get the body parsed in json
server.use(express.json());

// Append a prefix 
server.use('/api/v1/', require('./routes'));

server.listen(process.env.PORT, console.log(`Server up on port ${process.env.PORT}`));
