export class User {
  id: number;
  name: string;
  email: string;
  username: string;
  city: string;

  constructor(data: IUser) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.username = data.username;
    this.city = data.address.city;
  }

  matches(query: string): boolean {
    return (
      this.name.toLowerCase().includes(query.toLowerCase()) ||
      this.username.toLowerCase().includes(query.toLowerCase()) ||
      this.email.toLowerCase().includes(query.toLowerCase()) ||
      this.city.toLowerCase().includes(query.toLowerCase())
    );
  }
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}