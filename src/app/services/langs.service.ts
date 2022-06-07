import { Location } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangsService {

  constructor(private location: Location) { }

  languages: Lang[] = [
    {
      code: "en-US",
      id: "en"
    },
    {
      code: "ar-EG",
      id: "ar"
    }
  ];

  currentLang: Lang = this.languages[0];

  getLanguages() {
    return this.languages;
  }
  updateLang() {
    const langId= window.location.pathname.split('/')[1];
    const lang= this.languages.find(l => l.id == langId);
    this.currentLang = lang ? lang : this.languages[0];
    console.log(langId, lang, this.currentLang);
    
  }

  switchLanguage(ev) {
    const lang = ev.detail.value;
    const hrefArr = window.location.href.split("/");
    hrefArr[3] = lang.id;
    console.log(lang, hrefArr);
    
    window.location.replace(hrefArr.join("/"));
  }
}

export interface Lang {
  code: string;
  id: string;
}