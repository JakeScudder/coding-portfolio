// Importing and setting up express
const express = require('express');
const app = express();
const path = require('path');

// Importing json file and defining projects variable
const data = require('./data');
const projects = data.projects;

// Setting up static route to public folder
app.use('/static', express.static(path.join(__dirname, 'public')))

// Set view engine to pug
app.set('view engine', 'pug');

// Setting the index route
app.get('/', (req, res, next) => {
    res.locals = projects;
    res.render('index');
});

// Setting the about route
app.get('/about', (req, res, next) => {
    res.render('about')
});

// Setting the dynamic projects route
app.get('/project/:id' , (req, res, next) => {
    res.locals = projects;
    res.render('project', {
        title: res.locals[req.params.id].project_name,
        description: res.locals[req.params.id].description,
        techArray: res.locals[req.params.id].technologies,
        live_link: res.locals[req.params.id].live_link,
        github_link: res.locals[req.params.id].github_link,
        image_square: res.locals[req.params.id].image_square,
        image_landscape: res.locals[req.params.id].image_landscape
    });
});

// 404 page not found
app.use((req, res, next) => {
    const err = new Error("Sorry, we couldn't find the page you were looking for.");
    console.log("Page not found");
    err.status = 404;
    next(err);
})

//Error handler
app.use((err, req, res, next) => {
    res.locals.error = err
    res.status(err.status)
    res.render('error');
});



app.listen(3000, () => {
    console.log('Server listening on port 3000');
});



