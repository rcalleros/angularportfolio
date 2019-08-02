import { Component, OnInit } from '@angular/core';
import { PaypalService } from './paypal-service/paypal.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss'],
  providers: [PaypalService]
})
export class FeesComponent implements OnInit {
approveUrl = 'http://someurl.com';
  constructor(
    private paypalService: PaypalService
  ) { }

  ngOnInit() {
  }
  onPressPay() {
    this.paypalService.createOrder().subscribe((data) => { 
      console.log(data.links[1].href);
      this.approveUrl = data.links ? data.links[1].href : '';
    });
   // this.paypalService.auth().subscribe((data) => { console.log(data); });
   //this.paypalService.handleRequest().subscribe((data) => { console.log(data); });
  }

}
