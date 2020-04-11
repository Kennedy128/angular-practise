import { Component, OnInit, Input  } from '@angular/core';
import { Text } from '../text';

@Component({
  selector: 'app-text-detail',
  templateUrl: './text-detail.component.html',
  styleUrls: ['./text-detail.component.css']
})
export class TextDetailComponent implements OnInit {
  @Input() text: Text;

  constructor() { }

  ngOnInit(): void {
  }

}
