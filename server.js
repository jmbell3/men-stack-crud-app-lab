const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
//

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Test route
app.get('/test',(req, res) => {
    res.send('Server is running!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

    app.get('/new', (req, res) => {
        res.render('new');
    });

 const Car = require('./Models/car');

    app.post('/cars', (req, res) => {
        const { make, model, year, description } = req.body;
        const newCar = new Car({ make, model, year, description });
    
        newCar.save()
            .then(() => res.redirect('/'))
            .catch(err => res.status(400).send('Unable to save car to database'));
    });
