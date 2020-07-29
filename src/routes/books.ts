import { Router } from 'express';
import { Book } from '../models/Book';

export const books = Router();

books.post('/addBook', async (req, res) => {
	try {
		const book = await Book.create(req.body);
		res.status(201).send(book);
	} catch (e) {
		console.log(e);
		res.status(400).send();
	}
});

books.get('/getAllBooks', async (req, res) => {
	try {
		const books = await Book.scope('authors').findAll();
		res.send(books);
	} catch (e) {
		console.log(e);
		res.status(404).send();
	}
});

books.get('/:id', async (req, res) => {
	try {
		const book = await Book.scope('authors').findByPk(req.params['id']);
		res.send(book);
	} catch (e) {
		console.log(e);
		res.status(404).send();
	}
});
