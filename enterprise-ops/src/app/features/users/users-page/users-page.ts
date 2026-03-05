import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  imports: [],
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss',
})
export class UsersPage {
  constructor(private router: Router){}
  selectUser(userId: string) {
    this.router.navigate(['/reports'], {
      queryParams: { userId }
    });
  }
}
