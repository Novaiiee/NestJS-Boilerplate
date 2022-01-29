export class UserProfileDTO {
	bio: string;
	pronouns: string;
	followedTags: string[];
	username: string;
}

export class UserProviderDTO {
	email: string;
	provider: string;
	avatar: string;
}
