import { Routes, RouterModule } from '@angular/router'
import {HomeComponent} from './home/home.component';
import {NewTimeSheetComponent} from './new-time-sheet/new-time-sheet.component';
import {ManageComponent} from './manage/manage.component';
import {SelectEmployeesComponent} from './select-employees/select-employees.component';
const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent
    },    
    {
        path: 'select',
        component: SelectEmployeesComponent
    },   
    
    {
        path: 'new',
        component: NewTimeSheetComponent
    },   
    {
        path: 'manage',
        component: ManageComponent
    }   
    
];
export const RoutingModule = RouterModule.forRoot(routes);