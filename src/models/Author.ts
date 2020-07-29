import {
	Model,
	Table,
	Column,
	Scopes,
	BelongsToMany,
} from 'sequelize-typescript';
import { Book } from './Book';
import { BookAuthor } from './BookAuthor';

@Scopes(() => ({
	books: {
		include: [
			{
				model: Book,
				through: { attributes: [] },
			},
		],
	},
}))
@Table
export class Author extends Model<Author> {
	@Column
	name!: string;

	@Column
	birthYear!: number;

	@Column
	nationality!: string;

	@BelongsToMany(() => Book, () => BookAuthor)
	books?: Book[];
}
