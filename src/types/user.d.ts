export interface Address{

    country: string;
    state: string;
    street: string;
    number: number;

};

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    birthdate: string;
    image: string;
    address: Address;
}