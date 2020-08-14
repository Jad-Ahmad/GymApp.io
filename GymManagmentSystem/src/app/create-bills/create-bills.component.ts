import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-create-bills',
  templateUrl: './create-bills.component.html',
  styleUrls: ['./create-bills.component.css']
})
export class CreateBillsComponent implements OnInit {
  selectedFile: any;

  onFileChanged(event: { target: { files: any[]; }; }) {
    this.selectedFile = event.target.files[0];
  }

  constructor() { }

  Reset() {
    this.Reset();
  }

  onSubmit() {

  }

  ngOnInit(): void {

  }

}
