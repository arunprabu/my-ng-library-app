import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyWeatherLibService } from './my-weather-lib.service';

@Component({
  selector: 'mwl-my-weather-lib',
  template: `
    <div>
      <p>Weather in: {{ weatherData.name }}</p>
      <p>Temp: {{weatherData.main.temp}} degree</p>

      <p>
        {{ weatherData | json }}
      </p>
    </div>
    
    
  `,
  styles: [
  ]
})
export class MyWeatherLibComponent implements OnInit {

  weatherData: any;
  weatherSubscription: Subscription;
  
  constructor(private weatherService: MyWeatherLibService) { }

  ngOnInit(): void {

    this.weatherSubscription = this.weatherService.getWeatherUpdates()
      .subscribe((res: any) => {
        console.log(res);
        this.weatherData = res;
      });
  }

}
