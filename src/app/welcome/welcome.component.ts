import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

    username:any;
    constructor(private route:ActivatedRoute){

    }
    ngOnInit() {
      this.username = this.route.snapshot.queryParamMap.get('username')?.toString();
      console.log('username',this.username)
  }
}