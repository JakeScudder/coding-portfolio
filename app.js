// Importing and setting up express
const express = require('express');
const app = express();

// Importing json file
const data = require('./data');
// Setting up static route to public folder
app.use(express.static('public'));

// Set view engine to pug
app.set('view engine', 'pug');

// Setting the index route
app.get('/', (req, res, next) => {
    res.locals = data.projects;
    res.render('index');
});

// Setting the about route
app.get('/about', (req, res, next) => {
    res.render('about')
});

// Setting the dynamic projects route
app.get('/project', (req, res, next) => {
    res.render('project');
});



app.listen(3000, () => {
    console.log('Server listening on port 3000');
});



