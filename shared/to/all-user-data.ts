

import {Participant} from "../model/participant";
import {Thread} from "../model/thread";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

export interface AllUserData {
    participants: Participant[];
    threads: Thread[];
    messages: Message[];
}