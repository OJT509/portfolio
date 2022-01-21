import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpPromptComponent } from './components/shared/help-prompt/help-prompt.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Oliver Thorpe';

  constructor(public dialog: MatDialog) {
    
  }

  //Subscriptions need doing
  helpDialog(): void {
    this.dialog.open(HelpPromptComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'frosted-dialog'
    });
  }
}
