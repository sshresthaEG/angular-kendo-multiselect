import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      Current value: {{value | json}}
    </div>
    <div class="example-wrapper">
      <p>Favorite sport:</p>
      <kendo-multiselect [data]="listItems" [(ngModel)]="value"></kendo-multiselect>
    </div>
  `
})
export class AppComponent {
    public listItems: Array<string> = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];
    public value: any = ['sss']
}
