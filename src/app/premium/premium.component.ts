import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent {
  stripePromise = loadStripe(environment.stripe);

  constructor(private http: HttpClient, private userAuthSzervice: UserAuthService) {}
  user = this.userAuthSzervice.getUser();

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'premium',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 69000,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };
    const stripe = await this.stripePromise;
    if (!stripe) {
      console.error('Stripe failed to initialize');
      return;
    }
  
    // this is a normal http call to a backend API
    this.http.post(`${environment.serverUrl}/payment`, payment).subscribe(
      (data: any) => {
        // I use stripe to redirect to the Checkout page of the Stripe platform
        stripe?.redirectToCheckout({
          sessionId: data.id
        });
        this.user?.isPremium == true;
      },
      (error: any) => {
        console.error('Error creating payment session:', error);
      }
    );
  }

}