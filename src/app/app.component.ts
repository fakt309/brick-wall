import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  configWall: FormGroup = new FormGroup({
    widthWall: new FormControl<number>(5),
    heightWall: new FormControl<number>(2.1),
    widthBrick: new FormControl<number>(0.25),
    heightBrick: new FormControl<number>(0.12),
    gap: new FormControl<number>(0.02),
  })
}
