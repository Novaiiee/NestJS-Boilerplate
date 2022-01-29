import { AuthModule } from "@auth/auth.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "./user/user.module";

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot(process.env.DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		}),
		PassportModule.register({ session: true }),
		UserModule,
		AuthModule,
	],
})
export class AppModule {}
