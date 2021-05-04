import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../values.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  valueMapInResults: any;
  constructor(private valuesService: ValuesService) {
   }

  ngOnInit(): void {

    this.valuesService.getValuesChanged().subscribe(res => {
      this.valueMapInResults = this.valuesService.getValues();
    })

  }

}
