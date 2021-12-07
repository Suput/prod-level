import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css'],
})
export class PipesTestComponent implements OnInit {
  string = 'Test String';
  num = 0.10;

  myDate = Date.now();

  constructor() {}

  ngOnInit(): void {}
}
