import {Injectable} from '@angular/core';
import {utils as XLSXUtils, writeFile} from 'xlsx';
import {WorkBook, WorkSheet} from 'xlsx/types';

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor() {
  }

  fileExtension = '.xlsx';

  public exportToExcel({
                         data,
                         fileName,
                         sheetName = 'Data',
                         header = [],
                         table,
                       }): void {
    let wb: WorkBook;
    if (table) {
      wb = XLSXUtils.table_to_book(table);
    } else {
      const ws: WorkSheet = XLSXUtils.json_to_sheet(data, {header});
      wb = XLSXUtils.book_new();
      XLSXUtils.book_append_sheet(wb, ws, sheetName);
    }

    writeFile(wb, `${fileName}${this.fileExtension}`);
  }
}
