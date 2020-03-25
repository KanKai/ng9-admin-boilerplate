import { Component, OnInit } from '@angular/core'
import { MediaObserver, MediaChange } from '@angular/flex-layout'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true

  private sideClosed = ['sm', 'xs']

  constructor(public mediaObserver: MediaObserver) {
    mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change: MediaChange) => {
        if (this.sideClosed.indexOf(change.mqAlias) < 0) {
          this.sideBarOpen = true
        } else {
          this.sideBarOpen = false
        }
      })
  }

  ngOnInit() {}

  sideBarToggle(event?: any) {
    this.sideBarOpen = !this.sideBarOpen
  }
}
