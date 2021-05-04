import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class ValuesService {

    valuesMapInService = {};
    private valuesChanged$ = new Subject<any>();

    constructor(){

    }

    setValues(value: string){
        this.valuesMapInService[value] = this.valuesMapInService[value] + 1 || 1;
        this.valuesChanged$.next(true);
    }

    getValues(){
        return this.valuesMapInService;
    }

    getValuesChanged(): Observable<any> {
        return this.valuesChanged$.asObservable();
    }

    resetMap(){
        this.valuesMapInService = {};
        this.valuesChanged$.next(false);        
    }

}