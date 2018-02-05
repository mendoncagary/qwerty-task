import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  stringa: any;
  finalString: any;
  items: MenuItem[];
  wordCount: any;
  sentenceCount: any;
  characterCount: any;
  syllablesCount: any;
  whiteSpace: any;
  avgLen: any;
  avgWordPerSentence: any;

  countSyllables(word)
  {
    var input = word.toLowerCase();
    var syllables = 0;
    var numOfEInTheEnd = 0;
    var i = input.length - 1;
    while ((i >= 0 && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(input.charAt(i)) == 'e'.charCodeAt(0))) {
        i--;
        numOfEInTheEnd++;
    }
    ;
    if (numOfEInTheEnd === 1) {
        syllables = 1;
    }
    var preVowel = false;
    while ((i >= 0)) {
        if (this.isVowel(input.charAt(i))) {
            if (!preVowel) {
                syllables++;
                preVowel = true;
            }
        }
        else {
            preVowel = false;
        }
        i--;
    }
    ;
    return syllables;
  }

  isVowel(ch) {
    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) == 'a'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) == 'e'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) == 'i'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) == 'o'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) == 'u'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch) == 'y'.charCodeAt(0)) {
        return true;
    }
  }

  superCounter(x){
    this.characterCount = x.length;
    this.wordCount = x.split(" ").length;
    this.sentenceCount  = x.split(".").length - 1; 
    this.whiteSpace = this.wordCount - 1;
    var wordArray = x.split(" ");
    let wordAvg = 0;
    this.avgWordPerSentence = this.wordCount/this.sentenceCount;
    for(var i = 0; i < this.wordCount; i++)
    {
      wordAvg += wordArray[i].length;
     }
  this.avgLen = wordAvg/this.wordCount;
    }

    splitString()
    {
      //this.finalString  = this.CutIt(this.stringa,60);
      this.superCounter(this.stringa)
      this.syllablesCount = this.countSyllables(this.stringa)
      this.finalString = this.stringa.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      this.finalString = this.finalString.toString().replace(",,",",")
      this.finalString = this.finalString.replace(/(<)\s*(\w+\b),/g,"$1$2 ")
      this.finalString = this.finalString.replace(/,(\/>)/g,"$1")
    }

    
  ngOnInit()
  {
    this.items = [
      {
      label: 'Qwerty Thoughts'
      }
    ];
  }
}
