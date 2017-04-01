import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <table>
        <tr>
          <td>Elapsed:</td>
          <td style="text-align:right"><font color='green'>{{value1.toFixed(0)}}</font></td>
          <td>{{currentDate | date}}<td>
        </tr>
      
        <tr>
          <td>Remaining:</td>
          <td style="text-align:right"><font color='red'>{{value2.toFixed(0)}}</font></td>
        </tr>
      
        <tr>
          <td>Total:</td>
          <td style="text-align:right">{{total.toFixed(0)}}</td>
        </tr>
      </table>
    </div>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'Time passes';
  currentDate = 0;
  value1 = 0;
  value2 = 0;
  total = 0;

  ngOnInit(){
    let timer = Observable.timer(0,1000);
    timer.subscribe(t=> {
        this.func(t);
    });
  }
  
  func() {
    this.currentDate = Date.now();
    let currentYear = new Date(currentDate).getFullYear()
    
    this.value1 = (this.currentDate - new Date(currentYear, 0, 1).getTime()) / 1000;
    this.value2 = (new Date(currentYear, 11, 31, 23, 59, 59, 999).getTime() - this.currentDate) / 1000;
    this.total = this.value1 + this.value2;
  }
}
