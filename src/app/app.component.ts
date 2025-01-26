import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SplitFormComponent } from './split-form/split-form.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  imports: [SplitFormComponent, ReceiptComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  receiptData: any = null; // Stores the real-time receipt data

  // Handle the receipt data emitted by BillSplitterComponent
  handleReceipt(data: any): void {
    this.receiptData = data;
  }
}
