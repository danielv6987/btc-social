import {Company} from "../company/company-type";

export interface IUser {
    id: string;
    name: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}