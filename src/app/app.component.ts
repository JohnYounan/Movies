import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'Movies';
  constructor (private httpService: HttpClient) { }
  Movies: string [];

  ngOnInit () {
    this.httpService.get('./assets/movies.json').subscribe(
      data => {
        this.Movies = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}