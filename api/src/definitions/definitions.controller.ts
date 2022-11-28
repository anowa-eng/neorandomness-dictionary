import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefinitionsService } from './definitions.service';
import { Prisma } from '@prisma/client';

@Controller('definitions')
export class DefinitionsController {
  constructor(private readonly definitionsService: DefinitionsService) {}

  @Post('/api/definitions/create')
  create(@Body() createDefinitionDto: Prisma.DefinitionCreateInput) {
    return this.definitionsService.create(createDefinitionDto);
  }

  @Get('/api/definitions')
  findAll() {
    return this.definitionsService.findAll();
  }

  @Get('/api/definitions/filter')
  filterDefinitions(@Body() findDefinitionDto: Prisma.DefinitionWhereInput) {
    return this.definitionsService.filter(findDefinitionDto);
  }

  @Get('/api/definitions/:id')
  findOne(@Param('id') id: string) {
    return this.definitionsService.findOne(+id);
  }

  @Patch('/api/definitions/:id')
  update(@Param('id') id: string, @Body() updateDefinitionDto: Prisma.DefinitionUpdateInput) {
    return this.definitionsService.update(+id, updateDefinitionDto);
  }

  @Delete('/api/definitions/:id')
  remove(@Param('id') id: string) {
    return this.definitionsService.remove(+id);
  }
}
