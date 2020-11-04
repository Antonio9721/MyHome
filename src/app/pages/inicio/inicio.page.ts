import { Component, OnInit } from '@angular/core';
import { NoticiasService} from '../../services/noticias.service';
import { Article } from '../interfaces/Interfaces';

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
    noticias: Article[] = [];
    constructor(private noticiasService: NoticiasService) {
    }

  componentes: Componente[] = [
      {
          icon: 'home-outline',
          name: 'Acerca de Nosotros',
          redirecTo: '/about'
      },
      {
        icon: 'help-circle-outline',
        name: 'Información',
        redirecTo: '/informacion'
      },
      {
        icon: 'hand-right-outline',
        name: 'Recomendaciones y opiniones',
        redirecTo: '/opinion'
      },
      {
          icon: 'share-outline',
          name: 'Publicaciones',
          redirecTo: '/publicacion'
      },
      {
          icon: 'camera-outline',
          name: 'Fotos',
          redirecTo: '/fotos'
      },
      {
          icon: 'people-outline',
          name: 'Comunidad',
          redirecTo: '/comunidad'
      }
    ];

  ngOnInit() {
      this.noticiasService.getTopHeadLines().subscribe(
          resp => {console.log('noticias', resp);
                   this.noticias.push(...resp.articles);
          }
      );
  }

}
