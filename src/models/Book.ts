import { Model, Table, Column, Scopes } from 'sequelize-typescript';
import { Author } from './Author';

@Scopes(() => ({
	authors: {
		include: [
			{
				model: Author,
				through: { attributes: [] },
			},
		],
	},
}))
@Table
export class Book extends Model<Book> {
	@Column
	title!: string;

	@Column
	publicationYear!: number;

	@Column
	language!: string;

	@Column
	subject!: string;
}
