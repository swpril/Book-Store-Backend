import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
	dialect: 'sqlite',
	database: 'books',
	storage: ':memory:',
	models: [__dirname + '/models'],
	logging: false,
});
