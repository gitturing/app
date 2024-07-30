import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit{

  constructor(private data: DataService, private service: ServiceService){}

  CDAccounts: Column[] = [];
  GPAccounts: GridOption = {};
  dsAccounts: any[] = [];

  lAccounts: any[] = [];


  ngOnInit(){
    this.data.fnGetAccounts(this.service.lstrUser).subscribe({next: res => {
      this.lAccounts = res;
      this.dsAccounts = res;
  }})
  }
}
