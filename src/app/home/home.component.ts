import { Component } from '@angular/core';
import {Button} from '../app.button';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {        
    BtnNew: Button = {
        Value: 'Include New Timesheet',
        Id: 'btnNew' ,
        href : '/select'       
    };
  
    BtnManage: Button = {
        Value: 'Manage Timesheets',
        Id: 'btnManage' ,
        href : '/manage'       
    };
    
}
