import { Component, OnInit, Input, HostBinding, HostListener, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit, OnChanges {

  @Input() wallWidth: number = 5
  @Input() wallHeight: number = 2.08
  @Input() brickWidth: number = 0.25
  @Input() brickHeight: number = 0.12
  @Input() gap: number = 0.02

  @HostBinding('style.width.px') wallWidthInPixels: number = 1000
  @HostBinding('style.height.px') wallHeightInPixels: number = 1000
  brickWidthInPixels: number = 100
  brickHeightInPixels: number = 100
  gapInPixels: number = 2

  @HostListener('window:resize') onResize(): void {
    this.refreshSizeWall()
  }

  constructor() { }

  refreshSizeWall(): void {
    if (!this.wallWidth) this.wallWidth = 5
    if (!this.wallHeight) this.wallHeight = 2.1
    if (!this.brickWidth) this.brickWidth = 0.25
    if (!this.brickHeight) this.brickHeight = 0.12
    if (!this.gap) this.gap = 0.02

    if (this.wallWidth < 0) this.wallWidth = 0.1
    if (this.wallHeight < 0) this.wallHeight = 0.1
    if (this.brickWidth < 0) this.brickWidth = 0.1
    if (this.brickHeight < 0) this.brickHeight = 0.1
    if (this.gap < 0) this.gap = 0.1

    if (this.wallWidth > 20) this.wallWidth = 0.1
    if (this.wallHeight > 20) this.wallHeight = 0.1
    if (this.brickWidth > 1) this.brickWidth = 1
    if (this.brickHeight > 1) this.brickHeight = 1
    if (this.gap > 0.1) this.gap = 0.1

    const percentage = 0.9
    if (window.innerWidth / window.innerHeight >= this.wallWidth / this.wallHeight) {
      this.wallHeightInPixels = percentage * window.innerHeight
      this.wallWidthInPixels = this.wallHeightInPixels * this.wallWidth / this.wallHeight
    } else if (window.innerWidth / window.innerHeight < this.wallWidth / this.wallHeight) {
      this.wallWidthInPixels = percentage * window.innerWidth
      this.wallHeightInPixels = this.wallWidthInPixels / (this.wallWidth / this.wallHeight)
    }
    this.brickWidthInPixels = this.wallWidthInPixels / (this.wallWidth / this.brickWidth)
    this.brickHeightInPixels = this.wallHeightInPixels / (this.wallHeight / this.brickHeight)
    this.gapInPixels = this.wallHeightInPixels / (this.wallHeight / this.gap)
  }

  get numberOfLayers(): number {
    return Math.ceil(this.wallHeight / (this.brickHeight + this.gap))
  }

  get numberOfBricksInLayer(): number {
    return Math.ceil(this.wallWidth / (this.brickWidth + this.gap)) + 1
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshSizeWall()
  }

}
