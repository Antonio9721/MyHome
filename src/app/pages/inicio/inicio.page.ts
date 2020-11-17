import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    constructor(private postsService: PostsService) {}

    posts: any = [];

    habilitar = true;

    ngOnInit() {
        this.nextPost();
    }

    refreshPost(event){
        this.nextPost(event, true);
    }

    nextPost( event?, pull: boolean = false ){
        if (pull){
            this.habilitar = true;
            this.posts = [];
        }
        this.postsService.getPosts(pull)
            .subscribe((resultado: any) => {
                console.log(resultado);
                this.posts = resultado;

                if (event) {
                    event.target.complete();

                    if ( resultado.length === 0 ){
                        this.habilitar = false;
                    }
                }
            });
    }

}
