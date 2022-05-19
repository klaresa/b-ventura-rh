import { Injectable } from '@nestjs/common';
import Home from './pages/index'

@Injectable()
export class AppService {
  getHello(): string {
    return Home;
  }
}
