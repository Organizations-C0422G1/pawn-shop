import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';
import {News} from '../../../model/news/news';
import {NewsService} from '../../../service/news.service';

declare var $: any;

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: News[] = [];
  idModal: number;
  titleModal: string;
  searchForm: FormGroup;
  searchTitleForm: FormGroup;
  delete = [];
  page: number = 0;
  totalPage: number = 0;
  pageSelect: number[] = [];
  firstDate: string = '0001-01-01';
  lastDate: string = '9000-01-01';
  titleSearch: string = '';
  number: number;

  constructor(private newsService: NewsService) {

  }

  ngOnInit(): void {
    this.getAllNewsList(0, this.firstDate, this.lastDate, this.titleSearch);
    this.getFormSearch();
  }

  getFormSearch() {
    this.searchForm = new FormGroup({
      firstDate: new FormControl('', [this.checkDateNow]),
      lastDate: new FormControl()
    },this.checkDateBefore);
    this.searchTitleForm = new FormGroup({
      titleSearch: new FormControl('', [Validators.required]),
    });
  }

  getAllNewsList(page: number, firstDate, lastDate, titleSearch) {
    this.newsService.getAllNews(page, firstDate, lastDate, titleSearch).subscribe(data => {
      // @ts-ignore
      this.newsList = data.content;
      if (this.newsList.length !== 0) {
        // @ts-ignore
        this.totalPage = data.totalPages;
        // @ts-ignore
        this.pageSelect = new Array(data.totalPage);
        // @ts-ignore
        this.number = data.number;
      }
    });
  }

  elementDelete(id: number, title: string) {
    this.idModal = id;
    this.titleModal = title;
  }

  dateSearch() {
    const searchFirstDate = this.searchForm.value.firstDate;
    const searchLastDate = this.searchForm.value.lastDate;
    if (this.searchForm.valid) {
      this.getAllNewsList(this.page, searchFirstDate, searchLastDate, this.titleSearch);
    }else {
      return null;
    }

  }

  searchTitle() {
    const searchTitle = this.searchTitleForm.value.titleSearch;
    this.newsService.searchTheLast(searchTitle).subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.newsList = data.content;
    });
  }

  deleteTitle() {
    this.newsService.deleteNews(this.idModal).subscribe(data => {
    }, error => {
    }, () => {
      this.ngOnInit();
    });
  }

  resetModal() {
    this.delete = [];
  }

  previousPage() {
    let numberPage: number = this.number;
    if (numberPage > 0) {
      numberPage--;
      this.getAllNewsList(numberPage, this.firstDate, this.lastDate, this.titleSearch);
    }

  }

  nextPage() {
    let numberPage: number = this.number;
    if (numberPage < this.totalPage - 1) {
      numberPage++;
      this.getAllNewsList(numberPage, this.firstDate, this.lastDate, this.titleSearch);
    }

  }

  changePage(i: number) {
    this.getAllNewsList(i, this.firstDate, this.lastDate, this.titleSearch);
  }


  checkErrorFirstDate() {
    let dataToggleFirstDate = $('[data-bs-toggle="firstDate"]');
    if (this.searchForm.controls.firstDate.hasError('checkDate')) {
      dataToggleFirstDate.attr('data-bs-content', 'Không được nhập quá ngày hiện tại.');
      setTimeout(() => {
        dataToggleFirstDate.popovers('hide');
      }, 2000);
      dataToggleFirstDate.popovers('show');
    } else if (this.searchForm.controls.firstDate.hasError('pattern')) {
      dataToggleFirstDate.attr('data-bs-content', 'Vui lòng nhập đúng định dạng năm/tháng/ngày.');
      setTimeout(() => {
        dataToggleFirstDate.popover('hide');
      }, 2000);
      dataToggleFirstDate.popover('show');
    }
  }

  checkInputDate(firstDate: AbstractControl) {
    const value = firstDate.value;
    if (value === '') {
      return null;
    }
    const curDate = formatDate(new Date(), 'MM-dd-yyyy', 'en-US');
    if (value > curDate) {
      return {'checkDate': true};
    } else if (value.match('^(?:(?:31(/|-|.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(/|-|.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})' +
      '$|^(?:29(/|-|.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))' +
      '$|^(?:0?[1-9]|1\\d|2[0-8])(/|-|.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')) {
      return {'pattern': true};
    }
  }

  checkDateNow(form: AbstractControl) {
    let dateForm = new Date(form.value);
    let dateNow = new Date();
    if (dateNow.getTime() < dateForm.getTime()) {
      return {dateNow: true};
    } else {
      return null;
    }

  }

  checkDateBefore(form: AbstractControl) {
    let firstDate = new Date(form.value.firstDate);
    let lastDate = new Date(form.value.lastDate);
    if (firstDate.getDate() >= lastDate.getDate()) {
      return {beforeDate: true};
    }else {
      return null;
    }
  }


  checkErrorTitle() {
    let dataToggleTitle = $('[data-bs-toggle="titleSearch"]');
    if (this.searchForm.controls.firstDate.hasError('required')) {
      dataToggleTitle.attr('data-bs-content', 'Vui lòng nhập thông tin');
      setTimeout(() => {
        dataToggleTitle.popover('hide');
      }, 2000);
      dataToggleTitle.popover('show');
    }
  }

}

