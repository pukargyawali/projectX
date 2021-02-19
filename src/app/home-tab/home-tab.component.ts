import { Component, OnInit } from '@angular/core';
import { MediaService } from '../api/service/media.service'
import { map } from 'rxjs/operators'
import {Media} from '../api/models/media.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss'],
})
export class HomeTabComponent implements OnInit {
  public carouselMedias: Array<Media>;
  public medias$: Observable<Array<Media>>;

  constructor(private mediaService: MediaService ) {
    this.populateMediaForDisplay();
   }

  ngOnInit() {
    this.mediaService.getPageId("carousels_media").then(
       (pageId)=>{        
        this.mediaService.getCarouselMedia(pageId).subscribe();        
      }
    );        
  }

  populateMediaForDisplay(){
    this.medias$ = this.mediaService.media();
    this.medias$.subscribe((media:Array<Media>)=>{
      console.log(media);
      this.carouselMedias = media;
    });
  }

}
