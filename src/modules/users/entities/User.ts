import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

type UserSchema = {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
};

export class User {
    private _id: string;
    private _props: UserSchema;
    constructor(props: Replace<UserSchema, { createdAt?: Date }>, id?: string) {
        this._props = {
            ...props,
            createdAt: props.createdAt || new Date(),
        };
        this._id = id || randomUUID();
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._props.name;
    }

    set name(name: string) {
        this._props.name = name;
    }

    get email() {
        return this._props.email;
    }

    set email(email: string) {
        this._props.email = email;
    }

    get password() {
        return this._props.password;
    }

    set password(password: string) {
        this._props.password = password;
    }

    get createdAt() {
        return this._props.createdAt;
    }
}
