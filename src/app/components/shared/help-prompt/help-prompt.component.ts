import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-help-prompt',
  templateUrl: './help-prompt.component.html',
  styleUrls: ['./help-prompt.component.scss']
})
export class HelpPromptComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HelpPromptComponent>, 
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

  closePrompt(): void {
    this.dialogRef.close();
  }
}
