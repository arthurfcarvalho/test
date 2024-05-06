import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtribuirPerfisComponent } from './components/atribuir-perfis/atribuir-perfis.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DialogResponseComponent } from './components/dialog-response/dialog-response.component';
import { MatDialogModule } from '@angular/material/dialog'; // Importe MatDialogModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './components/usuario/login-usuario/login-usuario.component';

import { AppRoutingModule } from './app-routing/app-routing.module';




//imports formulario
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider'
import { AutenticacaoInterceptor } from './components/interceptors/autenticacao.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AtribuirPerfisComponent,
    DialogResponseComponent,
    CadastroUsuarioComponent,
    LoginUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule,
    AppRoutingModule

  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
