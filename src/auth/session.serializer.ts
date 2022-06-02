import { PassportSerializer} from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, { id: user.id }); // salva no session storage
  }


  deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
    // se quiser todas as infos do usuario
    // const user = this.userService.findUniqueUser(payload.id);
    // done(null, user);
    done(null, payload);
  }
}
