import { index, int, mysqlTable, varchar, timestamp, unique, text } from 'drizzle-orm/mysql-core';
import * as bcrypt from 'bcrypt';
import {db} from '../db.mjs';
import { eq } from 'drizzle-orm';

export const users = mysqlTable('users', {
	id: int('id').primaryKey().autoincrement(),
	firstName: varchar('firstName', { length: 250 }).notNull(),
	lastName: varchar('lastName', { length: 250 }),
	email: varchar('email', { length: 250 }).notNull(),
	emailVerifyAt: timestamp('emailVerifyAt'),
	phone: varchar('phone', { length: 250 }),
	phoneVerifyAt: timestamp('phoneVerifyAt'),
	password: varchar('password', { length: 250 }).notNull(),
	avatar: text('avatar'),
	createdAt: timestamp('createdAt').defaultNow().notNull(),
	updatedAt: timestamp('updatedAt').notNull().defaultNow().onUpdateNow(),
}, (users) => ({
	phoneIdx: index('phone_idx').on(users.phone),
	emailIdx: unique('email_idx').on(users.email),
}));


export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type


export const createUser = async (newUser: NewUser) => {
	const salt = await bcrypt.genSalt(10);
	newUser.password = await bcrypt.hash(newUser.password, salt);
	const result = await db.insert(users).values(newUser);
	const user = (await db.select().from(users).where(eq(users.id, result[0].insertId)))[0];
	const { password, ...rest } = user;
	return rest;
};