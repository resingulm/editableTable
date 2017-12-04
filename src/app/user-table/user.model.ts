export class User {
    public id : number;
    public firstName: string;
    public lastName: string;
    public eMail: string;

    constructor(id: number, firstName: string, lastName: string, eMail: string ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMail = eMail;
    }
}