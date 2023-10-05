import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanServiceService } from '../service/lan-service.service';
import { Emoloye } from '../modules/employe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  switchLanBtnVal!: string;
  emplData: Emoloye[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  constructor(public trdanSlateService: TranslateService, private langService: LanServiceService) {
    langService.selectLang.subscribe(res => {
      this.switchLanBtnVal = res;
    })
    this.emplData = langService.getEmployee();
  }

  ngOnInit(): void {
  }
  onTableDataChange(event: any) {
    this.page = event;
  }
}
