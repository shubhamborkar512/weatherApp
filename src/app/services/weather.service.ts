import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  
  getWeatherData(cityName:string){
    return this.http.get(environment.firebase.baseUrl+cityName,{
      headers: new HttpHeaders()
      .set(environment.firebase.XRapidAPIHostHeaderName,environment.firebase.XRapidAPIHostHeaderValue)
      .set(environment.firebase.XRapidAPIKeyHeaderName,environment.firebase.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q',cityName)
      .set('units',"metric")
      .set('modex','json')
      
    })
  }
}
