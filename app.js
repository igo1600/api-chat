const express = require('express');
const path = require('path');
const Database = require('./src/core/database');

const apiRoutes = require('./src/routes');

const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'public')));


app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'src', 'index.html');
    res.sendFile(indexPath);
    // res.send('hola mundo');
});


Database.connect().then(() => {
    // Listen to port
    app.listen(port, () => {
        console.log('App is listening to port ' + port);
    });
});
