import express from 'express';
import routes from '../src/routes/index';
const app = express();

app.use(express.json());
app.use(routes);

app.get('/hey', (req, res) => res.send('ho!'))

app.listen(3333, () => {
console.log('Server Started');
})
