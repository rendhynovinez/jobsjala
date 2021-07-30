import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-input-cv',
  templateUrl: './input-cv.component.html',
  styleUrls: ['./input-cv.component.scss'],
})
export class InputCvComponent  {

  @Input() type: string;
  @Input() placeholder: string;
  
  constructor(){};

}
