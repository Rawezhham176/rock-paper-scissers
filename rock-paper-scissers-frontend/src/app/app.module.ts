import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { BoardComponent } from './components/board/board.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ResultComponent } from './components/result/result.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlayedGamesComponent } from './pages/played-games/played-games.component';
import { TableComponent } from './components/table/table.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'played_games', component: PlayedGamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    BoardComponent,
    ButtonComponent,
    AboutComponent,
    NavComponent,
    HomeContentComponent,
    ResultComponent,
    FooterComponent,
    PlayedGamesComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
