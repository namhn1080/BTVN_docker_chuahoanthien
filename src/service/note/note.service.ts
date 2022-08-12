import { Injectable } from '@nestjs/common';
import { Note, User } from 'src/model/note.model';
import * as admin from 'firebase-admin'
import { userInfo } from 'os';

@Injectable()
export class NoteService {



db: admin.firestore.Firestore;
constructor(){
    this.db = admin.firestore();
}
// async addUser (user:User){
//     this.db.collection("user").doc(user.sdt).set(user)
// }


async addNote(note: Note){ 
if(note.id == undefined){
    note.id = Date.now().toString();
}
// let users= await this.db.collection("user").doc(note.id).set(note);
this.db.collection("test").doc(note.id).set(note)
}

async getNoteById(id: string){
 let note = await this.db.collection("notes").doc(id).get();
    return note.data();    
}
async getAllNotes(){
    let notes = await this.db.collection("notes").get();
;    return notes.docs.map(doc=> doc.data());
}

async updateNote(id: string, note:Note ){
    await this.db.collection("notes").doc(id).set(note);
}
async deleteNote(id: string) {
    await this.db.collection("notes").doc(id).delete();
}
}
