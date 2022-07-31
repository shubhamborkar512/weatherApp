import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weatherApp';
  
  weatherData?: WeatherData

  cityName="Pune"
  
  constructor(private weatherSevice:WeatherService){
  }


  ngOnInit(): void {
    
  }

  onClickSubmit(object:any){
    this.weatherSevice.getWeatherData(object.city).subscribe(
      (response:any)=>{
        this.weatherData=response;
        this.cityName=object.city;
      },
      (error:HttpErrorResponse)=>{ 
        alert("enter valid city")
        return
      }
    );
    
  }

  
}