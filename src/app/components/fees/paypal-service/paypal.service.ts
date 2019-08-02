
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';


export class PaypalAuth {
// tslint:disable-next-line: variable-name
  access_token: string;
}
export class PaypalOrder {
  links: any;
}

@Injectable()
export class PaypalService {

  constructor(private http: HttpClient) { }


  // sandbox
  PAYPAL_CLIENT = 'AZOICzrUcAB5IS9MhkZ_6DcedRmYQEdyFBTY4FCdXCHSKpTRDaKYovcp1nTkTWi330yElofTGhh3jsWY';
  PAYPAL_SECRET = 'EDKczLBYYglEOFEcbai7X9o8yT3pldQpj7VH_rwFu4Dm13YoTFtz-PGkL4zP1mIVl23lMiKnVGTzz3f0';

  basicAuth = btoa(`${ this.PAYPAL_CLIENT }:${ this.PAYPAL_SECRET }`);

  auth = () => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        Authorization: `Basic ${ this.basicAuth }`
      })
    };
    return this.http.post<PaypalAuth>('/v1/oauth2/token', `grant_type=client_credentials`, httpOptions);
  }

  configOrder(accessToken) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${ accessToken }`
      })
    };
    const fakeOrder = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '100.00'
          }
        }
      ]
    };
    return this.http.post<PaypalOrder>('/create', fakeOrder, httpOptions );
  }

  createOrder() {
    return this.auth().pipe(switchMap((data) => this.configOrder(data.access_token)));
  }

}