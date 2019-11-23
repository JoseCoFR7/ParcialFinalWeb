const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//conectando db
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('DB conectada'))
.catch(err => console.log(err));

//importando rutas
const indexRoutes = require('./routes/index');

//configs
app.set('port', process.env.PORT || 3000);
app.set('views',path.join( __dirname ,'views'));
app.set('view engine' , 'ejs');

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({exnteded: false}));

//routes
app.use('/', indexRoutes);

//Iniciando servidor



app.listen(3000, () => {
    console.log('Server on port 3000');
});

