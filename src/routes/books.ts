import { Router } from 'express';
import { Book } from '../models/Book';

export const books = Router();

books.post('/addBook', async (req, res) => {
	try {
		const book = await Book.create(req.body);
		res.status(201).send(book);
	} catch (e) {
		res.status(400).send();
	}
});

books.get('/getAllBooks', async (req, res) => {
	try {
		const books = await Book.scope('authors').findAll();
		if (books.length < 1) throw new Error();
		res.send(books);
	} catch (e) {
		res.status(404).send();
	}
});

books.get('/:id', async (req, res) => {
	try {
		const book = await Book.scope('authors').findByPk(req.params['id']);
		if (!book) throw new Error();
		res.send(book);
	} catch (e) {
		res.status(404).send();
	}
});
