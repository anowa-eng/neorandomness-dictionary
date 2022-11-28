import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class DefinitionsService {
  prisma: PrismaClient = new PrismaClient();

  create(createDefinitionDto: Prisma.DefinitionCreateInput) {
    return this.prisma.definition.create({
      data: createDefinitionDto
    });
  }

  findAll() {
    return this.prisma.definition.findMany();
  }

  filter(findDefinitionDto: Prisma.DefinitionWhereInput) {
    return this.prisma.definition.findMany({ where: findDefinitionDto });
  }

  findOne(id: number) {
    return this.prisma.definition.findUnique({
      where: { id }
    });
  }

  update(id: number, updateDefinitionDto: Prisma.DefinitionUpdateInput) {
    return this.prisma.definition.update({
      where: { id },
      data: updateDefinitionDto
    });
  }

  remove(id: number) {
    return this.prisma.definition.delete({
      where: { id }
    });
  }
}
