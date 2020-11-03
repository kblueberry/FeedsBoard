import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/core/models/user.model';
import {AuthService} from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(value => this.currentUser = value);
  }

  ngOnInit(): void {
  }

  userLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
