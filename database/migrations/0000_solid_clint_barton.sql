CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstName` varchar(250) NOT NULL,
	`lastName` varchar(250),
	`email` varchar(250) NOT NULL,
	`emailVerifyAt` timestamp,
	`phone` varchar(250),
	`phoneVerifyAt` timestamp,
	`password` varchar(250) NOT NULL,
	`avatar` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `email_idx` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE INDEX `phone_idx` ON `users` (`phone`);