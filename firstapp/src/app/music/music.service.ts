import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MusicService {
    private musicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';

    constructor(private http: HttpClient) {}
    getArtist(): Observable<any[]> {
        return this.http.get<any[]>(this.musicUrl);
    }

}
