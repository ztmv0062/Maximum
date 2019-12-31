import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable()
export class MessageService {
    private sidebar = new Subject<any>();

    sendMessage(message: string) {
        // console.log(message)
        this.sidebar.next({ text: message });
    }

    clearMessage() {
        this.sidebar.next();
    }

    getMessage(): Observable<any> {
        return this.sidebar.asObservable();
    }
}