import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface CovidResponse {
  Global: {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
  };

  Countries: [
    {
      Country: string;
      CountryCode: string;
      NewConfirmed: number;
      TotalConfirmed: number;
      NewDeaths: number;
      TotalDeaths: number;
      NewRecovered: number;
      TotalRecovered: number;
    }
  ];
}

@Injectable({
  providedIn: "root",
})
export class CovidService {
  constructor(private http: HttpClient) {}

  public getDataCovid() {
    return this.http.get<CovidResponse>("https://api.covid19api.com/summary");
  }
}
