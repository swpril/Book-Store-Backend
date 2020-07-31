import request from 'supertest';
import { app } from '../app';
import { Book } from '../models/Book';
import { Author } from '../models/Author';
import { sequelize } from '../sequelize';

beforeAll(async () => {
	await sequelize.sync({ force: true });
	await Book.create({
		title: 'The Alchemist',
		publicationYear: 2011,
		language: 'English',
		subject: 'Fiction',
	});
	await Author.create({
		name: 'Shubam',
		birthYear: '1997',
		nationality: 'Indian',
	});
});

test('Should add a new author', async () => {
	await request(app)
		.post('/authors/newAuthor')
		.send({
			name: 'Shubam',
			birthYear: '1997',
			nationality: 'Indian',
		})
		.expect(201);
});

test('Should get all authors', async () => {
	await request(app).get('/authors/getAllAuthors').expect(200);
});

test('Should get author by id', async () => {
	await request(app).get('/authors/1').expect(200);
});

test('Should not get author by random id', async () => {
	await request(app).get('/authors/3').expect(404);
});

test('Should link author ID with book ID', async () => {
	await request(app).post('/authors/1/books/1').expect(200);
});

test('Should not link author ID with book ID if not exists', async () => {
	await request(app).post('/authors/3/books/5').expect(400);
});

test('Should not get all authors if author does not exist', async () => {
	await Author.destroy({ where: {}, truncate: true });
	await request(app).get('/authors/getAllAuthors').expect(404);
});
