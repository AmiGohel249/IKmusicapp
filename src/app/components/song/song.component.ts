import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
images(arg0: number) {
throw new Error('Method not implemented.');
}
  @Input()title!: string;
  @Input() artist!: string;
  @Input() imagePath!: string;
  @Input() songs!: string[];
assets: any;

showSongs = false;// New property to track visibility of song list
toggleSongs(): void {
  this.showSongs = !this.showSongs;
}
}
