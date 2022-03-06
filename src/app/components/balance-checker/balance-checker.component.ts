import { Component, OnInit } from '@angular/core';
import { CheckBalanceService } from 'src/app/services/check-balance.service';

@Component({
  selector: 'app-balance-checker',
  templateUrl: './balance-checker.component.html',
  styleUrls: ['./balance-checker.component.css']
})
export class BalanceCheckerComponent implements OnInit {

  cardNumber:string="";
  balance!: number;
  showBalance:boolean = false;
  hasErrors:boolean = false;

  constructor(private checkBalanceService: CheckBalanceService) {
    this.subscribeToCheckBalanceServiceForBalance();
    this.subscribeToCheckBalanceServiceForErrors();
   }

   subscribeToCheckBalanceServiceForBalance(){
    this.checkBalanceService.balance.subscribe((balance:number)=>{
      this.hasErrors = false;
      this.balance = balance;
      this.showBalance = true;
    });
  }

  subscribeToCheckBalanceServiceForErrors(){
    this.checkBalanceService.hasErrors.subscribe((hasErrors:boolean)=>{
      this.showBalance = false;
      this.hasErrors = hasErrors;
    });
  }

  checkBalance(){
    this.checkBalanceService.checkBalanceFor(this.cardNumber);
  }

  nullPreviousMessage(){
    this.showBalance = false;
    this.hasErrors = false;
  }

  ngOnInit(): void {
  }

}
