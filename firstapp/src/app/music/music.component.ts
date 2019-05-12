import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  musicData: any[];

  constructor( private music: MusicService ) { }

  ngOnInit() {
    this.music.getArtist()
      .subscribe((data) => {this.musicData = data[0].artists});
  }

}
