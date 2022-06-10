import { Injectable } from '@nestjs/common';
import Home from './pages/index'
import { UsersRepository } from './users/users.repository';

@Injectable()
export class AppService {
  constructor(private readonly usersRepository: UsersRepository) {
  }

  async getHello(userId: number): Promise<any> {
    const user = await this.usersRepository.findOne({ _id: userId });
    console.log('appservice', user)
    return Home;
  }
}
