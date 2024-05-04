import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-response',
  templateUrl: './dialog-response.component.html',
  styleUrls: ['./dialog-response.component.css']
})
export class DialogResponseComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
