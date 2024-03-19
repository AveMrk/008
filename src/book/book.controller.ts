import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { BookDocument } from './schemas/book.schema';
import {BookService} from './book.service'
import { HydratedDocument, QueryWithHelpers } from 'mongoose';

import {ParamId} from './interfaces/param-id';
import {CreateDto} from './interfaces/dto/create-book'
import {UpdateDto} from './interfaces/dto/update-book'


@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  public create(@Body() body: CreateBookDto): Promise<BookDocument> {
      return this.bookService.create(body);
  }

  @Get()
  public getAll(): Promise<BookDocument[]> {
      return this.bookService.getAll();
  }

  @Put(':id')
  public update(
      @Param() { id }: IParamId,
      @Body() body: UpdateBookDto,
  ): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
      return this.bookService.update(id, body);
  }

  @Delete(':id')
  public delete(@Param() { id }: IParamId): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
      return this.bookService.delete(id);
  }

}
