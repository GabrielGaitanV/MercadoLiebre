const express = require('express');
const path = require('path');

const app = express();


const publicPath = (path.resolve(__dirname, './public'))
app.use( express.static(publicPath));

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log('El servidor de mercado liebre esta el puerto' + port ));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/crea-tu-cuenta', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/ingresa', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
