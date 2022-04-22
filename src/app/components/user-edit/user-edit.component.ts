import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public userID: Number | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.router.url !== '/createUser') {
      this.userID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    }
  }

  public navigateToList(): void {
    this.router.navigate(['users']);
  }
}
