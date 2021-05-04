import { Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ValuesService } from './values.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contactForm = this.fb.group({
    firstName: [""],
    lastName: [""]
  })

  constructor(private fb: FormBuilder, private valuesService: ValuesService){

    this.contactForm.get("firstName")
    .valueChanges
    .pipe(
      filter(res => res && res[res.length - 1].trim().length > 0)
    )
    .subscribe(res => {
      this.valuesService.setValues(res[res.length - 1]);
    });

    this.contactForm.get("lastName")
    .valueChanges
    .pipe(
      filter(res => res && res[res.length - 1].trim().length > 0)
    )
    .subscribe(res => {
      this.valuesService.setValues(res[res.length - 1]);
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyBoardEvent(event: KeyboardEvent){
    if(event.key === 'Delete' || event.key === 'Backspace'){
      event.preventDefault();
    }
  }


  onReset(){
    this.contactForm.reset();
    this.valuesService.resetMap();
  }



}
