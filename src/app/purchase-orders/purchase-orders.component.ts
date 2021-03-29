/*import {Component} from '@angular/core';*/
import { Component } from '@angular/core';

export interface PeriodicElement {
  po: number;
  podate: string;
  reqshipdate: string;
  age: number;
  so:number;
  invsup: string;
  con:number;
  cusref: string;
  payterms: string;
  status:string;
  purloc: string;
  shipto: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {po: 2617, podate: '10/9/2020', reqshipdate: '11/9/2020', age: 37,so: 1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
  {po: 2616, podate: '15/9/2020', reqshipdate: '11/9/2020', age: 37,so: 1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
  {po: 2687, podate: '14/9/2020', reqshipdate: '11/9/2020', age: 37,so: 1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
  {po: 2623, podate: '10/9/2020', reqshipdate: '11/9/2020', age: 37,so: 1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
  {po: 1098, podate: '10/9/2020', reqshipdate: '11/9/2020', age: 37,so: 1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
  {po: 2989, podate: '10/9/2020', reqshipdate: '11/9/2020', age: 37,so: 1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
  {po: 1435, podate: '10/9/2020', reqshipdate: '11/9/2020', age: 37,so: 1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
  {po: 2454, podate: '10/9/2020', reqshipdate: '11/9/2020', age: 37,so: 1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
  {po: 1345, podate: '10/9/2020', reqshipdate: '11/9/2020', age: 37,so: 1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
  {po: 23453, podate: '10/9/2020', reqshipdate: '11/9/2020', age: 37,so:1544234,invsup: 'MS International Inc',con:2343,cusref:'spc',payterms:'Against b/c',status:'Not Received',purloc:'MGX-Kent',shipto:'SPC Center Inc'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css']
})
export class PurchaseOrdersComponent {
  displayedColumns: string[] = ['po', 'podate', 'reqshipdate', 'age','so','invsup','con','cusref','payterms','status','purloc','shipto'];
  dataSource = ELEMENT_DATA;

}
