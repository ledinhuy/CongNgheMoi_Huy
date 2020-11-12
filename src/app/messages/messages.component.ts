import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog} from '@angular/material/dialog';
import { DialogCraeteGroupChatComponent } from '../dialog-craete-group-chat/dialog-craete-group-chat.component';
export interface User {
  id: string;
  name: string;
  updated: Date;
}
export interface UserMessages{
  id: string;
  name: string;
  messages: string;
  update: Date;
}
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
}) 
export class MessagesComponent {

  /** Based on the screen size, switch from standard to one column per row */
  cardlistfriend = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: ' ', cols: 2, rows: 2 },
        ];
      }
      return [
        { title: 'Danh Sách bạn bè ', cols: 2 , rows: 2 },
      ];
      
    })
  );
  cardsmessages = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '', cols: 8, rows: 2 },
        ];
      }
      return [
        { title: '', cols: 8, rows: 2 },
      ];
    })
  );


  lists: User[] = [
    {
      id: '1',
      name: 'Lê Đình HUy',
      updated: new Date('2/20/16'),
    },
    {
      id: '2',
      name: 'Đinh Đăng Khoa',
      updated: new Date('2/20/16'),
    },
    {
      id: '3',
      name: 'Phan Sang Vô',
      updated: new Date('2/20/16'),
    },
    {
      id: '4',
      name: 'Trần Thế Duy',
      updated: new Date('2/20/16'),
    },
    
  ];

  listMessages: UserMessages[] =[
    {
      id : '1',
      name : 'Lê Đình Huy',
      messages : 'tin nhắn thứ 1tin nhắn thứ 1tin nhắn thứ 1tin nhắn thứ 1tin nhắn thứ 1tin nhắn thứ 1 ',
      update: new Date('08/11/2020'),
    },
    {
      id : '1',
      name : 'Lê Đình Huy',
      messages : 'tin nhắn thứ 2',
      update: new Date('08/11/2020'),
    },
    {
      id : '2',
      name : 'Đinh Đăng Khoa',
      messages : 'tin nhắn thứ 3',
      update: new Date('08/11/2020'),
    },
    {
      id : '2',
      name : 'Đinh Đăng Khoa',
      messages : 'tin nhắn thứ tin nhắn thứ tin nhắn thứ 4tin nhắn thứ tin nhắn thứ tin nhắn thứ 4tin nhắn thứ tin nhắn thứ tin nhắn thứ 4tin nhắn thứ tin nhắn thứ tin nhắn thứ 4tin nhắn thứ tin nhắn thứ tin nhắn thứ 4',
      update: new Date('08/11/2020'),
    },
    {
      id : '2',
      name : 'Đinh Đăng Khoa',
      messages : 'tin nhắn thứ 5',
      update: new Date('08/11/2020'),
    },
    {
      id : '1',
      name : 'Lê Đình Huy',
      messages : 'tin nhắn thứ 6',
      update: new Date('08/11/2020'),
    },
    {
      id : '2',
      name : 'Đinh Đăng Khoa',
      messages : 'tin nhắn thứ 7',
      update: new Date('08/11/2020'),
    },
    {
      id : '2',
      name : 'Đinh Đăng Khoa',
      messages : 'tin nhắn thứ 8',
      update: new Date('08/11/2020'),
    },
    {
      id : '1',
      name : 'Lê Đình Huy',
      messages : 'tin nhắn thứ 9',
      update: new Date('08/11/2020'),
    },
    {
      id : '1',
      name : 'Lê Đình Huy',
      messages : 'tin nhắn thứ 10',
      update: new Date('08/11/2020'),
    },
    {
      id : '1',
      name : 'Lê Đình Huy',
      messages : 'tin nhắn thứ 11',
      update: new Date('08/11/2020'),
    }
  ]

  selecttedUser: User;
  onSelected(user: User){
    this.selecttedUser = user;
  }

  constructor(public breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogCraeteGroupChatComponent);

  }

}

