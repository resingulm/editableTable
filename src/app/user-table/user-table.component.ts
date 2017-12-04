import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  TableData: any = [];
  editRowId: number;
  
  userData : User[] = [
    new User(0, 'AFirstName', 'ALastName', 'AeMail@foo.com'),
    new User(1, 'BFirstName', 'BLastName', 'BeMail@foo.com'),
    new User(2, 'CFirstName', 'CLastName', 'CeMail@foo.com')
  ];
  
  ngOnInit() {
  }

  onEdit(rowId : number) {
    this.editRowId = rowId;
  }

  onPrint() {
    console.log(JSON.stringify(this.userData));
  }

}
