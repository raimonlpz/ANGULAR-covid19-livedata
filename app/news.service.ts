import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

interface NewsResponse {
  articles: [
    {
      title: string;
      url: string;
      urlToImage: string;
    }
  ];
}

const headers = new HttpHeaders({
  "X-Api-key": "f329f514a76c40d79c95f91e8e07977b",
});

@Injectable({
  providedIn: "root",
})
export class NewsService {
  url = `http://newsapi.org/v2/everything?q=coronavirus&sortBy=relevancy&language=en`;

  constructor(private http: HttpClient) {}

  public getNews() {
    return this.http.get<NewsResponse>(this.url, { headers });
  }
}
