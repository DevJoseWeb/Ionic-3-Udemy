import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
	providers: [
		MoovieProvider
	]
})
export class FeedPage {

	public objeto_feed = {
		titulo: "Guilherme Sant Ana Fujita",
		data: "November 5, 1955",
		descricao: "Estou desenvolvendo um app em Ionic",
		qntd_likes: 12,
		qntd_comments: 4,
		time_comment: "11h ago"
	}

	public lista_filmes =  Array<any>();


	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private movieProvider: MoovieProvider
	) {
	}

	ionViewDidLoad() {
		this.movieProvider.getLatestMovies().subscribe(
			data => {
				const response = (data as any);
				const objeto_retorno = JSON.parse(response._body);
				this.lista_filmes = objeto_retorno.results;
				console.log(objeto_retorno);
			}, error => {
				console.log(error);
			}
		)
	}

}
