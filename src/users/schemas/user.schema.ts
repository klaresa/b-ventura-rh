import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User as UserEntity } from '../../entities/user.entity';

export type UserDocument = UserEntity & Document;

@Schema()
export class User {
  @Prop({ required: true })
  type: string

  @Prop({ required: true, unique: true, index: true,  })
  username: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
