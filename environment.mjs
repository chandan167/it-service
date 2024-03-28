import 'dotenv/config';

import { cleanEnv, str, num } from 'envalid';

export const environment = cleanEnv(process.env, {
	NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] ,default: 'development'}),
	PORT: num({default: 3000}),
	DB_HOST: str(),
	DB_PORT: num(),
	DB_USER: str(),
	DB_PASSWORD: str(),
	DB_NAME: str(),
});

console.log(environment)
