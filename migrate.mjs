#!/usr/bin/env -S node --package-type=module
import { migrate } from 'drizzle-orm/mysql2/migrator';
import {db ,poolConnection} from './database/db.mjs';
// This will run migrations on the database, skipping the ones already applied
migrate(db, { migrationsFolder: './database/migrations' }).then(async() =>{
	await poolConnection.end();
	console.log('Database migrated successfully');
}).catch(async (error) => {
	await poolConnection.end();
	console.log(error);
});
// Don't forget to close the connection, otherwise the script will hang
