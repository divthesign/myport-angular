import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'div-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  titleFirst: string;
  titleSecond: string;
  mainTitle: string;

  constructor() { 
    this.titleFirst = 'Div';
    this.titleSecond = 'Thesign'
    this.mainTitle = `${this.titleFirst}${this.titleSecond}`
  }
    
  ngOnInit() {
  }

}
