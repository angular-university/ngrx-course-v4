

import {Participant} from "./participant";
import {Thread} from "./thread";
import {Message} from "./message";



export interface AllUserData {

    participants: Participant[];
    threads: Thread[];
    messages: Message[];

}