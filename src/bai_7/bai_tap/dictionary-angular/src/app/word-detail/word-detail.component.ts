import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/word';
import {DictionaryServiceService} from '../dictionary-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  detailWord: IWord;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryServiceService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      if (word != null) {
        this.detailWord = this.dictionaryService.findByWord(word);
      }
    });
  }

  ngOnInit(): void {
  }

}
