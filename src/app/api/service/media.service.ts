import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import{map,switchMap} from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs';
import {Media} from '../models/media.model';
import { promise } from 'protractor';

@Injectable({
    providedIn: 'root'
})

export class MediaService{
    private  httpClient: HttpClient;
    private medias: Array<Media>=[];  
    private pageId: string;
    private url= `http://127.0.0.1/wp/wp-json/wp/v2/`;


    constructor(private httpclient: HttpClient){
        this.httpClient = httpclient;        
    }

    public media(): Observable<Array<Media>> {
        return this.mediaSubject.asObservable();
    }

    public getCarouselMedia(pageId): Observable<Array<Media>>{     
      let options={
            params:{
                parent:  pageId                                          
            }
        }
        return this.httpClient.get<Array<Media>>(`${this.url}media?`, options).pipe(
            switchMap((response: any[]) => {                
                response.map((item:any)=>{                    
                    this.medias.push(new Media(item.id,item.slug,item.media_type,
                        item.media_details.sizes.woocommerce_thumbnail.source_url,
                        item.post,item.caption.rendered))
                });
                this.mediaSubject.next(this.medias)
                return this.media();          
            }));
    }

    public getPageId(pageName:string){
        let options={
            params:{
                slug: pageName,
                _fields: 'id'                                
            }
        }      
        
        var promise = new Promise((resolve, reject) => {
            this.httpClient.get<any[]>(`${this.url}pages?slug=carousels_media&_fields=id`)
                .subscribe((res:any[])=>{           
                    resolve(res[0].id);            
            }); 
        
        });
        return promise       
    }

    private mediaSubject = new BehaviorSubject<Array<Media>>(new Array<Media>());
    
}