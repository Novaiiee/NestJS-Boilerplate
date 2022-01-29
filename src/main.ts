import { NestFactory } from "@nestjs/core";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import { AppModule } from "./modules/app.module";

const expireTime = 1000 * 60 * 60 * 24 * 7;

const sessionStore = MongoStore.create({
	collectionName: "uids",
	mongoUrl: process.env.DB,
	mongoOptions: {
		useUnifiedTopology: true,
	},
	ttl: expireTime,
});

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(cookieParser());
	app.enableCors({ origin: true, credentials: true });

	app.use(
		session({
			secret: process.env.SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			name: "uid",
			cookie: {
				maxAge: expireTime,
			},
			store: sessionStore,
		})
	);

	app.use(passport.initialize());
	app.use(passport.session());

	await app.listen(process.env.PORT ?? 8000);
}

bootstrap();
