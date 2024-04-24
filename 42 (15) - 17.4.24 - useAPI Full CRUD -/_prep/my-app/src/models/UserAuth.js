import Entity from "./Entity";

export default class UserAuth
        extends Entity {
    email;
    password;

    constructor(email, password) {
        super();
        this.email = email;
        this.password = password;
    }
}