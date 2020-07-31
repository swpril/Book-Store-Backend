import request from 'supertest';
import { app } from '../app';
import { sequelize } from '../sequelize';

beforeAll(async () => {
	await sequelize.sync({ force: true });
});
test('Shoud add a new book', async () => {
	await request(app)
		.post('/books/addBook')
		.send({
			title: 'Fault in our starts',
			publicationYear: 2013,
			language: 'English',
			subject: 'Romance',
		})
		.expect(201);
});

test('Should get all the books', async () => {
	await request(app).get('/books/getAllBooks').expect(200);
});

test('Should get a book by id', async () => {
	await request(app).get('/books/1').expect(200);
});

test('Should not get a book by random id', async () => {
	await request(app).get('/books/2').expect(404);
});
