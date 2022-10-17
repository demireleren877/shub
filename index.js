const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.get('/', (req, res) => {
    res.render('main', { title: 'Hey', message: 'Hello there!' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Example app listening on port 3000!')
})