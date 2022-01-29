import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: "serenity-users" })
export class User {
	@Prop()
	username: string;

	@Prop({ required: true })
	email: string;

	@Prop({ required: true })
	userID: string;

	@Prop()
	provider: string;

	@Prop()
	avatar: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
