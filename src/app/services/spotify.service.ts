import { Injectable} from '@angular/core';
import {Http, Request, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl:string;
    private albumUrl:string;
    private access_token: string = "BQBJN2EMzniTxLOEIRkmpzLvbHpEkWWXM9AXW9mwBijDxPaZt1btZUqQWEShB6O0jW7duNGU8CbyW-BQDvtp6SS5YL-FxwRjmP-WAQ8tJEIQtBEAIRK1iIWOM20wUi6LcByNxgD--Ws6AL9usSNE66ZMX-AQyDurrsA";

    constructor(private _http: Http) {
       
    }

    searchMusic(str: string, type= 'artist'){
        this.searchUrl = "https://api.spotify.com/v1/search?query=" + str + "&offset=0&limit=20&type="+type+"&market=US";
        // var access_token = "BQAw2MZGyFRNgUig7QRXkgYvUOmLe4YS4AMm0XBk9mfe6apo-PdeJ1RTsM4B98xI1EMElYTjQ6Sz11PrsIgy-sPQsTSYJvbIFMXn3fXvC2ZeQVedGQNRskZpX6XEoEqv4jR5_OJkczmu3hE7AqzbvCg9nXoycqaphj8";
       
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.access_token);

        let options = new RequestOptions({ headers: headers }); 
        return this._http.get(this.searchUrl, options).map(res => res.json());
    }


    getArtist(id: string){
        this.artistUrl = "https://api.spotify.com/v1/artists/"+id;
        // var access_token = "BQAw2MZGyFRNgUig7QRXkgYvUOmLe4YS4AMm0XBk9mfe6apo-PdeJ1RTsM4B98xI1EMElYTjQ6Sz11PrsIgy-sPQsTSYJvbIFMXn3fXvC2ZeQVedGQNRskZpX6XEoEqv4jR5_OJkczmu3hE7AqzbvCg9nXoycqaphj8";
       
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer '+ this.access_token);

        let options = new RequestOptions({ headers: headers }); 
        return this._http.get(this.artistUrl, options).map(res => res.json());
    }

    getAlbums(id: string){
        this.albumsUrl = "https://api.spotify.com/v1/artists/"+ id + "/albums";
        // var access_token = "BQAw2MZGyFRNgUig7QRXkgYvUOmLe4YS4AMm0XBk9mfe6apo-PdeJ1RTsM4B98xI1EMElYTjQ6Sz11PrsIgy-sPQsTSYJvbIFMXn3fXvC2ZeQVedGQNRskZpX6XEoEqv4jR5_OJkczmu3hE7AqzbvCg9nXoycqaphj8";
       
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.access_token);

        let options = new RequestOptions({ headers: headers }); 
        return this._http.get(this.albumsUrl, options).map(res => res.json());
    }

     getAlbum(id: string){
        this.albumUrl = "https://api.spotify.com/v1/albums/"+ id;
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.access_token);

        let options = new RequestOptions({ headers: headers }); 
        return this._http.get(this.albumUrl, options).map(res => res.json());
    }
}