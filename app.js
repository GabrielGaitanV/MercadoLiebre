const express = require('express');
const path = require('path');

const app = express();
let port = 3000

const publicPath = (path.resolve(__dirname, './public'))
app.use( express.static(publicPath));

app.listen(port,()=>console.log("El servidor de mercado liebre esta el puerto 3000"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/crea-tu-cuenta', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/ingresa', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
