import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckBalanceService {

  private balanceSubject = new Subject<number>();
  balance = this.balanceSubject.asObservable();

  private hasErrorsSubject = new Subject<boolean>();
  hasErrors = this.hasErrorsSubject.asObservable();

  constructor(private http:HttpClient) { }

  checkBalanceFor(pan:string){
    this.http.get(
      'http://mocafi-env.eba-s2gmhpsg.us-east-1.elasticbeanstalk.com/api/v1/rest/mocafiProfile/'+pan,
    ).subscribe((res:any)=>{
      if(!res.res){ // if res.res == null then no no records matching the cardNumber, AKA pan, were found
        this.hasErrorsSubject.next(true);
      } else {
        this.balanceSubject.next(res.res.account.balance);
      }
    })

  }

}
