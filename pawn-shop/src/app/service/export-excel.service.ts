import {Injectable} from '@angular/core';
import * as fs from 'file-saver';
import {DatePipe} from "@angular/common";
import {Workbook} from "exceljs";


@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor(private datePipe: DatePipe) {
  }

  exportExcel(excelData: { title: any; data: any; headers: any }) {
    //Title, Header & Data
    const title = excelData.title;
    const header = excelData.headers;
    const data = excelData.data;

    //Create a workbook with a worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Contracts Data');

    //Add Row and formatting
    worksheet.mergeCells('D1', 'L4');
    let titleRow = worksheet.getCell('D1');
    titleRow.value = title;
    titleRow.font = {
      name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true
    };
    titleRow.alignment = {vertical: 'middle', horizontal: 'center'};
    worksheet.addRow([]);
    // Date
    let subTitleRow = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')])

    //Blank Row
    worksheet.addRow([]);

    //Adding Header Row
    let headerRow = worksheet.addRow(header);
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: 'ff3300'},
        bgColor: {argb: 'ff3300'}
      }
      cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
      cell.font = {
        bold: true,
        color: {argb: 'FFFFFF'},
        size: 12,
      };
      cell.alignment = {vertical: 'middle', horizontal: 'center'};

    });

    // Adding Data with Conditional Formatting
    data.forEach((d: any) => {
      let row = worksheet.addRow(Object.values(d));
      let sales = row.getCell(14);
      let color = 'FF99FF99';
      let sales_val = sales.value || 0;
      // Conditional fill color
      if (sales_val < 200000) {
        color = 'FF9999';
      }
      sales.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: color},
      };
      for(let j=1; j<=14;j++){
        row.getCell(j).border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
      }

      row.alignment = {vertical: 'middle', horizontal: 'center'};

    });

    for (let i = 1; i <= 15; i++) {
      if (i <= 3 || i == 6) {
        worksheet.getColumn(i).width = 8;
      } else if (i == 12 || i == 13 || i== 10) {
        worksheet.getColumn(i).width = 25;
      } else {
        worksheet.getColumn(i).width = 15;
      }
    }

    worksheet.addRow([]);
    worksheet.addRow([]);

    //Footer Row
    const footerRow = worksheet.addRow([
      'Contracts Report Generated from Pawn-Shop-Number1-VN',
    ]);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {argb: 'ff3300'}
    };
    footerRow.font = {
      bold: true,
      color: {argb: 'FFFFFF'},
      size: 12,
    };
    footerRow.alignment = {vertical: 'middle', horizontal: 'center'};
    //Merge Cells

    footerRow.getCell(5).border = {
      top: {style: 'thin'},
      left: {style: 'thin'},
      bottom: {style: 'thin'},
      right: {style: 'thin'}
    };

// Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:N${footerRow.number}`);
    worksheet.getColumn(5).numFmt = '$#,##0';
    worksheet.getColumn(7).numFmt = '$#,##0';
    worksheet.getColumn(14).numFmt = '$#,##0';
    worksheet.getColumn(6).numFmt = '#,#0.00"%"';
    //Generate & Save Excel File
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, title + '.xlsx');
    });
  }
}



