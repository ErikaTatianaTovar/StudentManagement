class User {
    constructor(email, passwordHash) {
        this.email = email;
        this.passwordHash = passwordHash;
    }
}

module.exports = User;
