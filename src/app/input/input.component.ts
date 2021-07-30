import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
    selector: 'app-input',
    templateUrl : './input.component.html',
    styleUrls : ['./input.component.scss'],
    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => InputComponent),
        }
      ]
})



export class InputComponent {
    @Input() type: string;
    @Input() placeholder: string;
    
    constructor(){};
}
