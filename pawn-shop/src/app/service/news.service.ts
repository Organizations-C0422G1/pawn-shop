import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from '../model/news/news';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private URL_NEWS = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) {
  }

  create(news: News) {
    return this.http.post('http://localhost:8080/api/news/create', news);
  }

  getAllNews(page: number, firstDate: string, lastDate: string, searchTitle: string): Observable<News[]> {
    return this.http.get<News[]>(this.URL_NEWS + '/list-news?page=' + page + '&firstDate=' + firstDate + '&lastDate=' + lastDate
      + 'titleSearch=' + searchTitle);
  }

  searchDistance(searchFirstDate: string, searchLastDate: string): Observable<News[]> {
    return this.http.get<News[]>(this.URL_NEWS + '/list-news?firstDate=' + searchFirstDate + '&lastDate=' + searchLastDate);
  }

  searchTheLast(searchTitle: string): Observable<News[]> {
    return this.http.get<News[]>(this.URL_NEWS + '/list-news?title=' + searchTitle);
  }

  deleteNews(id: number): Observable<News> {
    // @ts-ignore
    return this.http.patch<News>(this.URL_NEWS + '/delete/' + id);
  }
}
