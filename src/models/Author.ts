import { Model, Table, Column } from 'sequelize-typescript';

@Table
export class Author extends Model<Author> {
	@Column
	name!: string;

	@Column
	birthYear!: number;

	@Column
	nationality!: string;
}
