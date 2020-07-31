import { Router } from 'express';
import { Author } from '../models/Author';
import { BookAuthor } from '../models/BookAuthor';

export const authors = Router();

authors.post('/newAuthor', async (req, res) => {
	try {
		const author = await Author.create(req.body);
		res.status(201).send(author);
	} catch (e) {
		console.log(e);
		res.status(400).send();
	}
});

authors.post('/:id/books/:bookID', async (req, res) => {
	try {
		await BookAuthor.create({
			authorID: req.params['id'],
			bookID: req.params['bookID'],
		});
		res.send(200);
	} catch (e) {
		console.log(e);
		res.status(400).send();
	}
});

authors.get('/getAllAuthors', async (req, res) => {
	try {
		let authors = await Author.scope('books').findAll();
		if (authors.length < 1) throw new Error();
		res.send(authors);
	} catch (e) {
		console.log(e);
		res.status(404).send();
	}
});

authors.get('/:id', async (req, res) => {
	try {
		const author = await Author.scope('books').findByPk(req.params['id']);
		if (!author) throw new Error();
		res.send(author);
	} catch (e) {
		console.log(e);
		res.status(404).send();
	}
});
