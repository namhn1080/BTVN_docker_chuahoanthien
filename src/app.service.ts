import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  notes =[]

  // addNote 
  getHello(): string {
    return 'Hello World!';
  }

  post(body: any){
    console.log(body)
  }
}
