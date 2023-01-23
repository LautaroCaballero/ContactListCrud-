import { STATUS } from "./status.enum";

export class contact {
    name = ''
    number = ''
    status = STATUS.ONLINE

    constructor(name, number, status){
        this.name = name;
        this.number = number;
        this.status = status;
    }
}