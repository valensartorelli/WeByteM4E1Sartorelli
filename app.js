const express = require('express');
const app = express();
const path = require('path');
const puerto = process.env.PORT; 

const publicPath = path.resolve(__dirname, './public') ;
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.get('/register.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.get('/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.listen(puerto || 3000, () => {
    console.log('El servidor esta corriendo en el puerto 3000');
});