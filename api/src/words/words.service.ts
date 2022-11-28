import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class WordsService {
  prisma: PrismaClient = new PrismaClient();

  create(createWordDto: Prisma.WordCreateInput) {
    return this.prisma.word.create({
      data: createWordDto
    });
  }

  findAll() {
    return this.prisma.word.findMany();
  }

  filter(findWordDto: Prisma.WordWhereInput) {
    return this.prisma.word.findMany({ where: findWordDto });
  }

  findOne(id: number) {
    return this.prisma.word.findUnique({
      where: { id }
    });
  }

  update(id: number, updateWordDto: Prisma.WordUpdateInput) {
    return this.prisma.word.update({
      where: { id },
      data: updateWordDto
    });
  }

  remove(id: number) {
    return this.prisma.word.delete({
      where: { id }
    });
  }
}
