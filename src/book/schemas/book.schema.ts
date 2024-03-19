import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import {User} from './user.schema'

export type BookDocument = Book & Document;

@Schema()
export class Book{
  @Prop(){required: true}
  id: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  authors: string;
  @Prop()
  favorite: string;
  @Prop()
  fileCover: string;
  @Prop()
  fileName: string;
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'User'})
  user: User
}
export const BookSchema = SchemaFactory.createForClass(Book)