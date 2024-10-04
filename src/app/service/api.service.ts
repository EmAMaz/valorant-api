import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from './localstorage.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient, private storageService: StorageService) {}

  public getData(endpoint: string): Observable<any> {
    const storageData = this.storageService.getItem(endpoint)
    
    if (storageData) {
      return of(storageData);
    } else {
      return this.http
        .get(environment.apiUrl + `${endpoint}`)
        .pipe(
          tap((data) =>
            localStorage.setItem(endpoint, JSON.stringify(data))
          )
        );
    }
  }
}
