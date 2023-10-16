import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent {
  stripePromise = loadStripe(environment.stripe);

  constructor(private http: HttpClient) {}

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'premium',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 49,
      quantity: '0',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };
    const stripe = await this.stripePromise;
    if (!stripe) {
      console.error('Stripe failed to initialize');
      return;
    }
  
    this.http.post(`${environment.apiUrl}/payment/stripe`, payment)
      .subscribe((data: any) => {
        stripe.redirectToCheckout({
          sessionId: data.id,
        }).then((result) => {
          if (result.error) {
            console.error(result.error.message);
          }
        });
      });
  }

}