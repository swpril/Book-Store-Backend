import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { Book } from './Book';
import { Author } from './Author';

@Table
export class BookAuthor extends Model<BookAuthor> {
	@ForeignKey(() => Book)
	@Column
	bookID!: number;

	@ForeignKey(() => Author)
	@Column
	authorID!: number;
}
