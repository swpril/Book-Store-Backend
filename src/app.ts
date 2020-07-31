import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authors } from './routes/authors';
import { books } from './routes/books';
import { sequelize } from './sequelize';

const app = express();

(async function () {
	await sequelize.sync({ force: true });
})();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/authors', authors);
app.use('/books', books);

export { app };
