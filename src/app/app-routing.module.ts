import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'organizer',
		component: OrganizerComponent
	},
	{
		path: 'movies',
		component: MoviesComponent
	},
	{
		path: 'shows',
		component: ShowsComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
