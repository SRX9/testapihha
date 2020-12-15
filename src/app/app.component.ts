import { Component } from '@angular/core';
import { GetstatedataService } from './getstatedata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedState = '';
  statelist;
  statedata;
  list = [];
  constructor(private statedata1: GetstatedataService) {
    this.statedata = statedata1;
  }

  ngOnInit() {
    //getting list of all states
    this.statedata.getStateList().then((res) => {
      this.list = res.data;
      let temp = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].period === '2015') {
          temp.push(this.list[i].region);
        }
      }
      this.statelist = temp;
    });
  }

  getstate(state): void {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].period === '2015' && this.list[i].region === state) {
        this.selectedState = this.list[i];
        break;
      }
    }
  }
}
