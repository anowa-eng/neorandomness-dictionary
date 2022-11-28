import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WordsService } from './words.service';
import { Prisma } from '@prisma/client';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post('/api/words/create')
  create(@Body() createWordDto: Prisma.WordCreateInput) {
    return this.wordsService.create(createWordDto);
  }

  @Get('/api/words')
  findAll() {
    return this.wordsService.findAll();
  }

  @Get('/api/words/filter')
  filterWords(@Body() findWordDto: Prisma.WordWhereInput) {
    return this.wordsService.filter(findWordDto);
  }

  @Get('/api/words/:id')
  findOne(@Param('id') id: string) {
    return this.wordsService.findOne(+id);
  }

  @Patch('/api/words/:id')
  update(@Param('id') id: string, @Body() updateWordDto: Prisma.WordUpdateInput) {
    return this.wordsService.update(+id, updateWordDto);
  }

  @Delete('/api/words/:id')
  remove(@Param('id') id: string) {
    return this.wordsService.remove(+id);
  }
}
