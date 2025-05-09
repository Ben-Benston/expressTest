import express from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from your simple Express API!');
});

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

app.get('/items', (req, res) => {
    const items = [
        { id: 1, name: 'Item A', price: 10.99 },
        { id: 2, name: 'Item B', price: 25.50 },
        { id: 3, name: 'Item C', price: 5.75 },
    ];
    res.json(items);
});

app.post('/echo', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
