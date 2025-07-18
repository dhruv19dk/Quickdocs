
// Node.js backend for QuickDocs
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('QuickDocs backend is running.');
});

app.listen(4001, () => console.log("Server running on port 4001"));
