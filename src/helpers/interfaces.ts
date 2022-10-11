export type Category = 'life' | 'work' | 'sport' | 'education';
export interface Todo {
	title: string;
	done: boolean;
	category: Category;
}
