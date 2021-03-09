import express from 'express';
import routes from '../src/routes/index';
import bodyParser from 'body-parser';
const app = express();

app.use(express.json());
app.use(routes);
app.use(bodyParser.json());

app.listen(3333, () => {
console.log('Server Started');
})
