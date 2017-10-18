import { Component } from '@angular/core';
import {Button} from '../app.button';
import {TimesheetService} from '../timesheet.service'
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-select-employees',
  templateUrl: './select-employees.component.html',
  styleUrls: ['./select-employees.component.css'],
  providers: [TimesheetService]
})


export class SelectEmployeesComponent {
    constructor(private timeSheetService: TimesheetService) {}
    listEmployee = null
    
    BtnBack: Button = {
        Value: 'Back',
        Id: 'btnBack' ,
        href : '/'       
    };
    BtnSearch: Button = {
        Value: 'Search',
        Id: 'btnBack' ,
        href : null       
    };
    BtnShowAll: Button = {
        Value: 'Show All',
        Id: 'btnShowAll' ,
        href : null       
    };
        
    
    onSearch(name : string = "") : void {
        this.listEmployee = this.timeSheetService.search(name);                 
    }
    
}
