import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtribuirPerfisComponent } from './components/atribuir-perfis/atribuir-perfis.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogResponseComponent } from './components/dialog-response/dialog-response.component';
import { MatDialogModule } from '@angular/material/dialog'; // Importe MatDialogModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AtribuirPerfisComponent,
    DialogResponseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
