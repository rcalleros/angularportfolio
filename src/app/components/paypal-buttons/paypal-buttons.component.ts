import { Component, OnInit, ElementRef } from '@angular/core';
declare let paypal: any;
@Component({
  selector: 'app-paypal-buttons',
  templateUrl: './paypal-buttons.component.html',
  styleUrls: ['./paypal-buttons.component.scss']
})
export class PaypalButtonsComponent implements OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.initPaypal();
  }
  initPaypal() {
    paypal.Buttons(this.paypalConfig()).render(this.el.nativeElement);
  }
  paypalConfig = () => {
    return {
      createOrder: this.createOrder,
      onApprove: this.onApprove
    }
  }

  createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '100.00'
        }
      }]
    });
  }
  onApprove =(data, actions)=>{
      // Capture the funds from the transaction
      return actions.order.capture().then((details) => {
        // Show a success message to your buyer
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
  }



}
