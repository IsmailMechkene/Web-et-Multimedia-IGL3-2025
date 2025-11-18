import { User } from "./models";

export interface Repository<T> {
    add(item: T): void;
    remove(id: number): void;
    getAll(): T[];  
}

export class UserRepository implements Repository<User> {
  private users: User[] = [];

  add(user: User): void {
    this.users.push(user);
  }

  remove(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
  }

  getAll(): User[] {
    return this.users;
  }
}