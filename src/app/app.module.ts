
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
 import {FormsModule} from '@angular/forms';
 import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule  ],
  declarations: [ AppComponent, NavbarComponent, SearchComponent, AboutComponent, ArtistComponent, AlbumComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
