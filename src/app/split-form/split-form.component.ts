import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'bill-splitter',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    NgIf,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './split-form.component.html',
  styleUrl: './split-form.component.css',
})
export class SplitFormComponent {
  billAmount: number = 0;
  numberOfPeople: number = 1;
  splitAmount: number = 0;

  // Output event to emit the updated receipt data
  @Output() receiptGenerated = new EventEmitter<any>();

  constructor() {}

  // Automatically calculate the split whenever inputs change
  calculateSplit(): void {
    if (this.numberOfPeople > 0) {
      this.splitAmount = parseFloat(
        (this.billAmount / this.numberOfPeople).toFixed(2)
      );
      this.emitReceiptData();
    } else {
      this.splitAmount = 0;
    }
  }

  // Emit the receipt data to the parent or ReceiptsComponent
  emitReceiptData(): void {
    const receiptData = {
      totalBill: this.billAmount,
      numberOfPeople: this.numberOfPeople,
      splitAmount: this.splitAmount,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    this.receiptGenerated.emit(receiptData); // Send data to ReceiptsComponent
  }
}
