import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {



  constructor() { }


  ngOnInit(): void {


    const myChart = new Chart('chart', {
      type: 'bar',
      data: {
          labels: ['Month 1', 'Month 2', 'Month 4', 'Month 6', 'Month 8', 'Month 10', 'Month 12'],
          datasets: [{
              label: 'Percentge Of Body Fat',
              data: [19, 16, 13, 10, 7, 4, 2],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });



  }

}



