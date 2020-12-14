const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree')

const db = mongoose.connection;

db.once('open', () => {
    console.log(`connected to MongoDB on ${db.host}:${db.port}`);
})

db.on('error', () => {
    console.error(`Database error: ${err}`)
})

//make home route just like express
app.get('/', (req, res) => {
    res.send('mongoose');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`AHH, the sweet sounds of PORT: ${PORT}`)
})