const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs =  require('express-handlebars');


//inicializar
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));

app.engine('.hbs', exphbs({
    defaultLayouts:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebars')
}));

app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());




//global var
app.use((req,res,next)=>{
    next();
});

//routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/equipos',require('./routes/equipos'));
app.use(require('./routes/inicio'));

//public
app.use(express.static(path.join(__dirname,'public')));

//star
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});