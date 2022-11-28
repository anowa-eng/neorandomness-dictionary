import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordController } from './word/word.controller';
import { WordsModule } from './words/words.module';
import { DefinitionsModule } from './definitions/definitions.module';

@Module({
  imports: [WordsModule, DefinitionsModule],
  controllers: [AppController, WordController],
  providers: [AppService],
})
export class AppModule {}
