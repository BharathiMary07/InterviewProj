import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css']
})
export class NewPurchaseOrderComponent implements OnInit {
  newpurord = this.formBuilder.group({


    });



  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

  }

}
