import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './sequelize';
import { authors } from './routes/authors';
import { books } from './routes/books';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/authors', authors);
app.use('/books', books);

app.listen(PORT, async () => {
	await sequelize.sync({ force: true });
	console.log(`Server is up on PORT ${PORT}`);
});
