

export interface Message  {
    id:number;
    threadId:number;
    participantId: number;
    text:string;
    read:boolean;
}