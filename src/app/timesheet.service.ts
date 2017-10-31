import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TimeSheetService {
    constructor(private http: Http) { }
    search(){
        return this.http.get('http://localhost/timesheet/list-employees.php')
            .map((response: Response) => response.json());
    }
}

    /*
    search(name: string) {

        // Make the HTTP request:
        let result = {};
        this.http.get('http://localhost/timesheet/list-employees.php?name=' + name).subscribe(data => {
          // Read the result field from the JSON response.
            result = data['results'];
        });
        return result;
    }
    */
