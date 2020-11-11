import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../interfaces/Interfaces';


interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})

export class PublicacionPage implements OnInit {
  noticias: Article[] = [];
    constructor(private noticiasService: NoticiasService) {
    }



  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(
      resp => {console.log('noticias', resp);
               this.noticias.push(...resp.articles);
    
  }
    );
}

}
