const express = require('express');
const app = express();

app.set('port', process.env.PORt || 3000);

//middleware
app.use(express.json());

//routes
app.use(require('./routes/restaurantRoutes.js'));

const server = app.listen(app.get('port'), ()=>
{
    console.log('server on port: ', app.get('port'));
});