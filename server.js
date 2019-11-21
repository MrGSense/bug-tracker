const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');

let app = express();

app.use(express.json());

const db = config.get('mongoURI');

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));