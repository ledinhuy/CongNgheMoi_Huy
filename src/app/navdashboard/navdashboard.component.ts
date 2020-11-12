import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navdashboard',
  templateUrl: './navdashboard.component.html',
  styleUrls: ['./navdashboard.component.css']
})
export class NavdashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    public display = 1 ;
    CallPageMessages() {
     this.display = 1 ;
    }
    CallPageContacts() {
      this.display = 2;
    }
  constructor(private breakpointObserver: BreakpointObserver) {}

}
