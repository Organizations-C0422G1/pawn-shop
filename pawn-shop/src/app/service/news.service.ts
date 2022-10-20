import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from '../model/news/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  create(news: News) {
    return this.http.post('http://localhost:8080/api/news/create', news);
  }
}
