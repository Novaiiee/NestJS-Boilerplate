import { Injectable } from "@nestjs/common";
import { UserProviderDTO } from "@user/dto";
import { User } from "@user/user.entity";
import { UserService } from "@user/user.service";

export interface ValidateUser {
	user: User | null;
	error: string | null;
}

@Injectable()
export class AuthService {
	constructor(private userService: UserService) {}

	async validateUser({ email, provider, avatar }: UserProviderDTO): Promise<ValidateUser> {
		return {
			user: null,
			error: null,
		};
	}

	async createUser({ email, avatar, provider }: UserProviderDTO): Promise<User> {
		return null;
	}
}
