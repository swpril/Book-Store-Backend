import {
	Model,
	Table,
	Column,
	Scopes,
	BelongsToMany,
} from 'sequelize-typescript';
import { Author } from './Author';
import { BookAuthor } from './BookAuthor';

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

	@BelongsToMany(() => Author, () => BookAuthor)
	authors?: Author[];
}
