import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';

import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';
/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './services/authentication.service';
import { CoreService } from './services/core.service';
import { HttpClientModule } from '@angular/common/http';
import { UserVerficationComponent } from './theme/layout/auth/user-verfication/user-verfication.component';
// import { AuthSignup1Component } from './theme/layout/auth/auth-signup1/auth-signup1.component';
// import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { TestComponent } from './theme/layout/auth/test/test.component';
import { MessageService } from './services/message.service';
import { preventDefault } from '@fullcalendar/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './demo/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective,
    UserVerficationComponent,
    TestComponent,
    // AuthSignup1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
    ReactiveFormsModule, 
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: function  tokenGetter() {
    //          return     localStorage.getItem('access_token');},
    //     whitelistedDomains: ['localhost:4200'],
    //     blacklistedRoutes: ['http://localhost:4200/login']
    //   }
    // })
  ],
  providers: [NavigationItem,AuthenticationService,CoreService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
