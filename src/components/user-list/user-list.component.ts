import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { Album } from '../Album';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  albums: Album[] = [];
  
  constructor(private userService: UserServiceService) {}
  
  ngOnInit(): void {
    this.userService.getAlbums().subscribe((albums) => {
  this.albums = albums;
  });
  
  console.log('albums',this.albums)
  }
  
}