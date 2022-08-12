import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Note } from 'src/model/note.model';
import { NoteService } from 'src/service/note/note.service';

@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService){}

    @Get("/all")
    getAllNotes(){
        return this.noteService.getAllNotes()
    }

    @Get("/")
    getNoteById(@Query() query: any){
        console.log(query)
        return this.noteService.getNoteById(query.id)
    }

    @Post("/")
    addNote(@Body() note: Note ){
        return this.noteService.addNote(note)
    }

    @Put("/")
    updateNote(@Body() note:Note){
        console.log(note)
        return this.noteService.updateNote(note.id, note)
    }
    @Delete("/")
    deleteNote(@Body() id: any){
        console.log(id)
        return this.noteService.deleteNote(id.id)
    } 


}
