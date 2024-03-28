import 'dotenv/config';
import type { Config } from 'drizzle-kit';
import { environment } from './environment.mjs';
export default {
	schema: './database/schema',
	out: './database/migrations',
	driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
	dbCredentials: {
		host: environment.DB_HOST,
		user: environment.DB_USER,
		port: environment.DB_PORT,
		password: environment.DB_PASSWORD,
		database: environment.DB_NAME,
	},
} satisfies Config;