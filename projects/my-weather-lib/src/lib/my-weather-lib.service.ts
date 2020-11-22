import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyWeatherLibService {

  REST_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Washington&units=metric&appid=92fdf1aa21d318a1610df2a1fff03819';

  constructor(private http: HttpClient ) { }

  getWeatherUpdates(): any {
    console.log('Inside getWeatherUpdates of WeatherService');

    return this.http.get(this.REST_API_URL)
        .pipe( map((res: any) => {
          console.log(res);
          return res;
        }));
  }
}
