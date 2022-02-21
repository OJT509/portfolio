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

  helpMessage: string = 
  `This website uses smooth scrolling, which is disabled by default in some browsers. 
  To experience these smooth transitions, please enable them in your browser. 
  Please note that this will not impact your overall use of the website
  if you opt to not enable this feature.`;

  constructor(public dialog: MatDialog) { }

  helpDialog(): void {
    this.dialog.open(HelpPromptComponent, {
      height: '350px',
      width: '600px',
      panelClass: 'frosted-dialog',
      data: this.helpMessage
    });
  }
}