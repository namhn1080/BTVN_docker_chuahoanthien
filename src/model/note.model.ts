export interface User{
    name: string;
    sdt: string;
}



export interface Note {
    id: string;
    title: string;
    description: string;
    datetime: string;
    user:{
        stt: string;
        name: string;
    };
}