import { AuthService } from 'src/app/auth.service';
import { Component, ViewChild } from '@angular/core';
import { filter, startWith, delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../auth.config';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string = '';

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private oauthService: OAuthService,
    private authService: AuthService
  ) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin().then(() => {
      if (oauthService.getIdentityClaims()) {

        this.authService.storeCurrentUser(this.oauthService.getIdentityClaims()['name' as keyof Object]);

      }
    });
    this.oauthService.setupAutomaticSilentRefresh();



    this.oauthService.events
      .pipe(filter(e => e.type !== 'session_unchanged'))
      .subscribe(e => {
        console.log(e);
    });



    // Automatically load user profile
    this.oauthService.events
      .pipe(filter(e => e.type === 'token_received'))
      .subscribe(e => {
        console.log(e);
        console.log('state', this.oauthService.state);
        this.oauthService.loadUserProfile();

        const scopes = this.oauthService.getGrantedScopes();
        console.log('scopes', scopes);
      });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 960px)']).pipe(
      delay(0) // wirft sonst einen Fehler, weil mode-Wert sonst während View-Aufbau geändert wird
    ).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }




  get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return '';
    return 'bla';
    //return claims['given_name'];
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  refresh() {
    this.oauthService.refreshToken();
  }
}
