import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtribuirPerfisComponent } from './components/atribuir-perfis/atribuir-perfis.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DialogResponseComponent } from './components/dialog-response/dialog-response.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './components/usuario/login-usuario/login-usuario.component';

import { AppRoutingModule } from './app-routing/app-routing.module';



import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from "@angular/material/list";
import { FormsModule } from '@angular/forms';
//date
import { MatDatepickerModule } from '@angular/material/datepicker';

//nav
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

//tabs
import {MatTabsModule} from '@angular/material/tabs'; 

//imports formulario
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider'
import { AutenticacaoInterceptor } from './components/interceptors/autenticacao.interceptor';
import { HomeComponent } from './components/home/home.component';
import { LocalDateTimePipe } from './components/pipe/local-date-time.pipe/local-date-time.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { CadastroPluriComponent } from './views/pluri/cadastro-pluri/cadastro-pluri.component';
import {MatSelectModule} from '@angular/material/select';
import { ListarPluriComponent } from './views/pluri/listar-pluri/listar-pluri/listar-pluri.component';
import { FinalizarPluriComponent } from './views/pluri/finalizar-pluri/finalizar-pluri.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    AtribuirPerfisComponent,
    DialogResponseComponent,
    CadastroUsuarioComponent,
    LoginUsuarioComponent,
    HomeComponent,
    LocalDateTimePipe,
    CadastroPluriComponent,
    ListarPluriComponent,
    FinalizarPluriComponent,
    HeaderComponent,
    
    
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
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatSelectModule,
    NgbModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
    LocalDateTimePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
