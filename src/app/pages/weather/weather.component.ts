import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from './services/weatherapi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  public cidade: string = '';
  public weather: any = [];

  constructor(
    private weatherService: WeatherapiService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    // this.weatherService.getCurrentWeather(this.cidade, 'pt').subscribe((res) => {
    //   console.log(res);
    // })
  }

  showWeatherDetails() {
    this.weatherService.getCurrentWeather(this.cidade).subscribe({
      next: (value) => {
        this.weather = [];
        this.weather.push(value);
        console.log(value);
        this.changeBackground(value.current.is_day);
        this.cidade = '';
      },
      error: (err) => {
        this.toast.error('Essa cidade não existe', '[ERRO]');
        this.cidade = '';
        document.body.style.background = '#fff'
        this.weather = [];
      },
    });
  }

  changeBackground(is_day: number) {
    if (is_day === 1) {
      document.body.style.backgroundImage =
        'linear-gradient(0deg, rgba(255,128,24,1) 0%, rgba(255,233,61,1) 59%)';
    } else {
      document.body.style.backgroundImage =
        'linear-gradient(180deg, rgba(2,0,29,1) 62%, rgba(3,10,55,1) 100%)';
    }
  }
}
