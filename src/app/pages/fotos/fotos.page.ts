import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {

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
