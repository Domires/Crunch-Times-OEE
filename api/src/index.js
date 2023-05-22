const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

// cors
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://domires:1q2w3e4r4r3e2w1q@oee.2u3rli6.mongodb.net/retryWrites=true&w=majority', {useNewUrlParser: true, dbName: "colecao", })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));

// select database to use

app.use(cors());
app.use('/api', router);

app.listen(3000, () => {console.log('Listening on port 3000');});
