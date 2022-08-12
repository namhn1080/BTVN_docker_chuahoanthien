import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteService } from './service/note/note.service';
import { NoteController } from './apis/note/note.controller';

@Module({
  imports: [],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
