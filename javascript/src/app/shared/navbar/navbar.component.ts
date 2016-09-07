import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'as-navbar',
  templateUrl: 'app/shared/navbar/navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() brand: string;
}
