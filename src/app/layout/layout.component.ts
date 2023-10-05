import { Component, OnInit } from '@angular/core';
import { LanServiceService } from '../service/lan-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  switchLanBtnVal!: string;
  browserLen: any;
  constructor(private langService: LanServiceService, public trdanSlateService: TranslateService) {
    langService.selectLang.subscribe(res => {
      this.switchLanBtnVal = res;
    })
    trdanSlateService.addLangs(['English', 'العربية'])
    trdanSlateService.setDefaultLang('English');
    trdanSlateService.use('English')
    this.browserLen = trdanSlateService.getDefaultLang();
    this.languageChanged();
    langService.selectLang.next(this.browserLen)
  }

  ngOnInit(): void {
  }
  switchLanBtnFun(val: string) {
    if (val === "English") {
      // this.switchLanBtnVal = "Arabic";
      this.langService.selectLang.next("العربية")
      this.trdanSlateService.use('العربية')

    }
    if (val === "العربية") {
      // this.switchLanBtnVal = "English";
      this.langService.selectLang.next("English")
      this.trdanSlateService.use('English')

    }
  }
  languageChanged() {
    this.trdanSlateService.use(this.browserLen.match(/English|العربية/)) ? this.browserLen : 'English'
  }
  closeNav(){

  }
  openNav(){
    
  }
}
