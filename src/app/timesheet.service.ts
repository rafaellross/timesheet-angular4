import { Injectable, NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '@ngx-translate/';

@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ]
})



@Injectable()
export class TimesheetService {

    List: object;
    
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}  

    search(name: string): object {
        // Make the HTTP request:
        var result = {};
        this.http.get('http://localhost/timesheet/list-employees.php?name=' + name).subscribe(data => {
          // Read the result field from the JSON response.
            result = data['results'];
        });
        return result;
    }  
}


