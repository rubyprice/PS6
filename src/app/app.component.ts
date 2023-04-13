import { Component } from '@angular/core';

import {UNIVERSITY} from './models/uniModel';
import {UniServiceService} from "./services/uni-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Universities Around the World';
  selectedUniversity: UNIVERSITY | undefined;
  universities : UNIVERSITY[] | undefined;
  isClicked: boolean | undefined;

  getUnis(): void {
    this.UniServiceService.getUnis()
      .subscribe(universities => {
        this.universities = universities;
      });
  }
  displayUniDetail(university: UNIVERSITY) {
    this.selectedUniversity = university;
  }


  constructor(private UniServiceService: UniServiceService) {

  }
  ngOnInit() {
    this.getUnis();
  }

}
