import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { CovidService } from "../covid.service";
import { NewsService } from "../news.service";

@Component({
  selector: "app-fetching",
  templateUrl: "./fetching.component.html",
  styleUrls: ["./fetching.component.css"],
})
export class FetchingComponent implements OnInit {
  global: {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
  };

  country: {
    Country: string;
    CountryCode: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
  };

  valueCountry: string;

  news: [
    {
      title: string;
      url: string;
      urlToImage: string;
    }
  ];

  constructor(private dataCovid: CovidService, private dataNews: NewsService) {
    this.getData();
    this.getLastNews();
  }

  @ViewChild("countryName") el: ElementRef;
  onClick($event) {
    $event.preventDefault();
    console.log(this.valueCountry);

    this.dataCovid.getDataCovid().subscribe((data) => {
      this.country = data.Countries.find((c) => {
        return c.Country.toLowerCase() === this.valueCountry.toLowerCase();
      });
      console.log(this.country);
      this.valueCountry = "";
      this.el.nativeElement.value = "";
    });
  }

  ngOnInit() {
    this.getLastNews();
  }

  getData() {
    this.dataCovid.getDataCovid().subscribe((data) => {
      console.log(data.Global);
      this.global = data.Global;
    });
  }

  getLastNews() {
    this.dataNews.getNews().subscribe((data) => {
      const results = data.articles;
      this.news = results;
    });
  }
}
