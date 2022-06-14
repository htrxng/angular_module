import {Injectable} from '@angular/core';
import {IWord} from './model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  private words: IWord[] = [
    {
      word: 'spring',
      meaning: 'Mùa xuân'
    },
    {
      word: 'family',
      meaning: 'Gia đình'
    },
    {
      word: 'martial arts',
      meaning: 'Võ thuật'
    },
    {
      word: 'music',
      meaning: 'Âm nhạc'
    },
  ];

  constructor() {
  }

  public findAllWord() {
    return this.words;
  }

  public findByWord(word: string) {
    for (let word of this.words) {
      if (word.word === word) {
        return word;
      }
    }
  }
}
