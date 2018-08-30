export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isActive?: boolean;
  registered?: any;
  hide?: boolean;
  age: number;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
}
