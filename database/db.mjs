
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { environment }  from '../environment.mjs';

export const poolConnection = mysql.createPool({
	host: environment.DB_HOST,
	user: environment.DB_USER,
	port: environment.DB_PORT,
	password: environment.DB_PASSWORD,
	database: environment.DB_NAME,
	pool: 5
});
export const db = drizzle(poolConnection);



