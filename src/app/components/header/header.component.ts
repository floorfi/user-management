import { OAuthService } from 'angular-oauth2-oidc';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sidenavOpen = false;

  @Output() public sidenavToggle = new EventEmitter();

  name: string = '';

  constructor(
    private oauthService: OAuthService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.obs.subscribe({
      next: val => { console.log(val) }, //next callback
      error: (e) => { console.log("error") }, //error callback
      complete: () => { console.log("Completed") } //complete callback
    })
    this.authService.currentUser.subscribe(result => {
      this.name = result;
    })
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout() {
    this.oauthService.revokeTokenAndLogout()
  }

}
