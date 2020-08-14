import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-coach-view',
  templateUrl: './coach-view.component.html',
  styleUrls: ['./coach-view.component.css']
})
export class CoachViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myDoughnutChart = new Chart("chart", {
      type: 'doughnut',
      data : {

        options: {
          elements: {
            center: {
              text: 'Red is 2/3 the total numbers',
              color: '#FF6384', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 20, // Default is 20 (as a percentage)
              minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
              lineHeight: 25 // Default is 25 (in px), used for when text wraps
            }
          }
        },
        datasets: [{
            data: [8, 20, 7],

        backgroundColor: [

                  'rgba(255,255,102)',
                  'rgb(220,20,60)',
                   'green'

      ],

      borderWidth: 6
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        // labels: [
        //     'Red',
        //     'Yellow',
        //     'Blue'
        // ]



    },

  });

  var textInside = "Your  Step 9250";
  var myPieChart = new Chart("Stepchart", {

    type: 'pie',
    data: {
      datasets: [{
          data: [10, 20, 30],

          backgroundColor: [

            'rgba(255,255,102)',
            'rgb(220,20,60)',
             'green'

],
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs

  },
  options: {
    elements: {
      center: {
        text: textInside
      }
    }}
});
  }

}

