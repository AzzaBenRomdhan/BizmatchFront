import { Component } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-reunion',
  template: '<ejs-schedule [eventSettings]="eventObject"></ejs-schedule>',
  //templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent {
  public eventObject: EventSettingsModel = {
    dataSource: [{
      id: 1,
      Subject: 'Événement 1',
      StartTime: new Date(2023, 0,15,0,10),
      EndTime: new Date(2023,0,17,0,10)
    }]
  }
}
