const express = require('express');

const app = express();

app.use(express.static('./dist/patient-diagnosis'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/patient-diagnosis/'}),
);

app.listen(process.env.PORT || 8080);
