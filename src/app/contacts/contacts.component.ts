import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
   
          { title: 'Card 2', cols: 2, rows: 2 },
         
 
        ];
      }

      return [
   
        { title: 'Card 2', cols: 2, rows: 2 },
       
      ];
    })
  );
  cards1 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
   
          
          { title: 'Card 3', cols: 8, rows: 2 },
 
        ];
      }

      return [
   
        
        { title: 'Card 3', cols: 8, rows: 2 },
 
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
