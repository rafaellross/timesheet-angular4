import { Component } from '@angular/core';

export class Button {
    Value : String;
    Id: String;
    href: String;
}

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
