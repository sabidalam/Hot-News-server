const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('News API running')
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    } else {
        const category = news.filter(n => n.category_id === id)
        res.send(category);
    }

})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log('Hot News Coming', port);
})