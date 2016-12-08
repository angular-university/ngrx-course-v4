



import {Headers} from "@angular/http";


export function xhrHeaders(participantId: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('participantid', participantId.toString());
    return {headers};
}
