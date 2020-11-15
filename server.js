const express = require('express');
const app = express();

const posts = [
    {
        username: 'Anish',
        title: 'post1'
    },
    {
        username: 'Aditya',
        title: 'post2'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.listen(3000, () => console.log('Port running on 3000'));