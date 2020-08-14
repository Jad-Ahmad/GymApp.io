import { Component, OnInit, Injectable } from '@angular/core';
import {  NgbDatepicker, NgbDatepickerI18n, NgbDatepickerKeyboardService, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { Chart } from 'node_modules/chart.js';

const Key = {
  PageUp: 'PageUp',
  PageDown: 'PageDown',
  End: 'End',
  Home: 'Home'
};

@Injectable()
export class CustomKeyboardService extends NgbDatepickerKeyboardService {
  processKey(event: KeyboardEvent, dp: NgbDatepicker) {
    const state = dp.state;
    switch (event.code) {
      case Key.PageUp:
        dp.focusDate(dp.calendar.getPrev(state.focusedDate, event.altKey ? 'y' : 'm'));
        break;
      case Key.PageDown:
        dp.focusDate(dp.calendar.getNext(state.focusedDate, event.altKey ? 'y' : 'm'));
        break;
      case Key.End:
        dp.focusDate(event.altKey ? state.maxDate : state.lastDate);
        break;
      case Key.Home:
        dp.focusDate(event.altKey ? state.minDate : state.firstDate);
        break;
      default:
        super.processKey(event, dp);
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  }
}


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  model: NgbDateStruct;


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Incomes' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Outcomes' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor(public i18n: NgbDatepickerI18n) {
    // customize default values of modals used by this component tree
    // config.backdrop = 'static';
    // config.keyboard = false;
  }



  // open(content) {
  //   this.modalService.open(content);
  // }

  ngOnInit(): void {


  }
}
