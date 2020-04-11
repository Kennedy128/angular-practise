import { Component, OnInit } from '@angular/core';
import { Text } from '../text';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  texts=[];
  deleteText(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.texts[index].name}?`)

      if (toDelete){
        this.texts.splice(index,1)
      }
    }
  }
  toggleDetails(index){
    this.texts[index].showDescription = !this.texts[index].showDescription;
  }
  completeText(isComplete, index){
    if (isComplete) {
      this.texts.splice(index,1);
    }
  }
  
  

  constructor(textService:TextService) {
    this.texts = textService.getTexts()
  }

  ngOnInit(): void {
  }

}
