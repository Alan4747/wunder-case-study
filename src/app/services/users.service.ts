import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private subject: WebSocketSubject<any>;
  sid: any;

  constructor(private http: HttpClient) {
  }

  getSID() {
    this.http.get(environment.urlSID,
      {responseType: 'text'}).subscribe(res => {
      this.sid = res.replace(/96:0/g, '').replace(/2:40/g, '');
      this.sid = JSON.parse(this.sid);
      this.getResults(this.sid.sid);
    });
  }

  getResults(sid: any) {
    this.http.get(environment.urlResult + sid, {responseType: 'text'}).subscribe(res => {
     this.connect();
    });
  }

  public connect() {

    this.subject = webSocket({
      url: environment.urlWSS + `${this.sid.sid}`,
      deserializer: () => {
      },
      openObserver: {
        next: () => {
          console.log('connection ok');
        }
      },
      closeObserver: {
        next: () => {
          console.log('disconnect ok');
        }
      }
    });

    this.subject.subscribe(
      data => console.log('data: ', data),
      err => console.log('err: ', err),
      () => console.log('complete')
    );
  }

  public getData() {
    this.subject.next('userList');
  }
}
