import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserEditModalComponent } from './components/user-edit-modal/user-edit-modal.component';
import { UserListRowComponent } from './components/user-list-row/user-list-row.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SearchFilterPipe } from './pipes/searchFilter.pipe';
import { ListWrapperComponent } from './components/util/list-wrapper/list-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    UserDataComponent,
    UserEditModalComponent,
    UserListRowComponent,
    SearchFilterPipe,
    ListWrapperComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true,
        allowedUrls: [environment.apiURL]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
