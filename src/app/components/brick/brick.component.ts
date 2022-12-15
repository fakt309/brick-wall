import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-brick',
  templateUrl: './brick.component.html',
  styleUrls: ['./brick.component.scss']
})
export class BrickComponent implements OnInit {

  @HostBinding('style.width.px') @Input() width: number = 300
  @HostBinding('style.height.px') @Input() height: number = 100

  constructor() { }

  ngOnInit(): void {
  }

}
