const express = require('express');
const path = require('path');
const app = express();

//db conexion
require('./database');

//setting
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(express.json());

//routes
app.use('/api/tarea',require('./routes/router'));

//static
app.use(express.static(path.join(__dirname, 'public')));


//listening
app.listen(app.get('port'), () => {
    console.log('server on port:', app.get('port'));
})