// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { User, UserDocument } from './schemas/user.schema'
// import { FilterQuery, Model } from 'mongoose';
//
// @Injectable()
// export class UsersRepository {
//
//   constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}
//
//   async create(user: User): Promise<User>{
//     return new this.model(user).save();
//   }
//
//   async findAll(): Promise<User[]> {
//     return this.model.find().exec();
//   }
//
//   async findOne(filterQuery: FilterQuery<User>): Promise<User> {
//     return this.model.findOne({ _id: filterQuery });
//   }
// }
