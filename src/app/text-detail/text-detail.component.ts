import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Text } from '../text';

@Component({
  selector: 'app-text-detail',
  templateUrl: './text-detail.component.html',
  styleUrls: ['./text-detail.component.css']
})
export class TextDetailComponent implements OnInit {
  @Input() text: Text;
  @Output() isComplete = new EventEmitter<boolean>();
  textComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
