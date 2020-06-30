class GitHub {
    constructor() {
        this.client_id = 'dab54065ed9eda9d046a';
        this.client_secret = '6576c668dbfaa77cc99dc82ef2463d546f3a1310';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}
