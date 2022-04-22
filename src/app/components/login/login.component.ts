import { Component, OnInit } from '@angular/core';
import {OAuthErrorEvent, OAuthService} from "angular-oauth2-oidc";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: OAuthService, private router: Router) { }

  ngOnInit(): void {
    // Bereits eingeloggt
    if (this.oauthService.hasValidAccessToken()) {
      this.router.navigateByUrl('/');
    }

    this.oauthService.events.subscribe(event => {
      if (event.type === 'token_received' && this.router.url.includes('/login')) {
        this.router.navigateByUrl('/');
      }
    });

  }

  // API Login
  login() {
    this.oauthService.initLoginFlow();
  }



}
