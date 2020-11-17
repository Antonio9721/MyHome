import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

    @Input() post: any = {};

    img1 = '../.././/assets/images/quedate_portada.jpg';
    // img2 = '../.././/assets/images/perro-2.jpg';
    // img3 = '../.././/assets/images/perro-3.jpg';

    constructor() { }

    ngOnInit() {}

}
