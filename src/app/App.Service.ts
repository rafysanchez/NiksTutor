
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './auth/user';

@Injectable()
export class ApiService {

  public getUsers(): Observable<any> {
    const fakeUsers: User[] = [
      {position: 1, firstName: 'Dhiraj', lastName: 'pereira', email: 'dhiraj@gmail.com'},
      {position: 2, firstName: 'Tom', lastName: 'albuquerque', email: 'Tom@gmail.com'},
      {position: 3, firstName: 'Hary', lastName: 'moros', email: 'hary@gmail.com'},
      {position: 4, firstName: 'xser', lastName: 'richa', email: 'xxx@gmail.com'},
      {position: 5, firstName: 'rtey', lastName: 'silva', email: 'www@gmail.com'},
      {position: 6, firstName: 'uyio', lastName: 'santos', email: 'ttt@gmail.com'},
      {position: 7, firstName: 'cida', lastName: 'lima', email: 'yyy@gmail.com'},
      {position: 8, firstName: 'ana', lastName: 'Pan', email: 'hary@gmail.com'},
      {position: 9, firstName: 'pepe', lastName: 'lopes', email: 'xxx@gmail.com'},
      {position: 10, firstName: 'rey', lastName: 'camara', email: 'www@gmail.com'},
      {position: 11, firstName: 'alipio', lastName: 'andrade', email: 'ttt@gmail.com'}
    ];
    return Observable.of(fakeUsers);
  }

}
