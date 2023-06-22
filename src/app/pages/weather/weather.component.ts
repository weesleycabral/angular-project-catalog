import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from './services/weatherapi.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public cidade: string = '';
  public weather: any = [];

  constructor(
    private weatherService: WeatherapiService
  ) {

  }

  ngOnInit(): void {
    // this.weatherService.getCurrentWeather(this.cidade, 'pt').subscribe((res) => {
    //   console.log(res);
    // })
  }

  showWeatherDetails() {
    this.weatherService.getCurrentWeather(this.cidade).subscribe((value) => {
      this.weather = [];
      this.weather.push(value);
      console.log(value);
      this.changeBackground()
    })
  }

  changeBackground() {
    this.weatherService.getCurrentWeather(this.cidade).subscribe((value) => {
      if (value.current.is_day === 1) {
        document.body.style.backgroundColor = "orange";
      } else {
        document.body.style.backgroundColor = "#00008b";
      }
    })
  }

}
