import { Injectable, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

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


