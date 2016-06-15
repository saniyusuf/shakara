import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {

  gridDesigns: any;

  constructor(private navController: NavController, private http: Http) {

    this.http.get('/data/data.json')
        .map(response => response.json().female)
        .subscribe(femaleData => {
          var femaleGridData = [];

          let i = 0;
          while (i <= femaleData.length - 1){
            femaleGridData.push(femaleData.slice(i, i+2));
            i+=2;
          }


          this.gridDesigns = femaleGridData;

        });
  }
  
}
