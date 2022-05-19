// import { Injectable } from '@nestjs/common';
// import { UsersRepository } from '../users/users.repository';
//
// export type User = any;
//
// @Injectable()
// export class UsersService {
//   private readonly users = [
//     {
//       userId: 1,
//       username: 'john',
//       password: 'changeme',
//     },
//     {
//       userId: 2,
//       username: 'maria',
//       password: 'guess',
//     },
//   ];
//
//   constructor(private readonly usersRepository: UsersRepository) {}
//
//
//   async create(username: string, password: string) {
//
//   }
//
//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find(user => user.username === username);
//   }
// }
