import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RespuestaTopHeadLines} from '../pages/interfaces/Interfaces';

@Injectable({
    providedIn: 'root'
})
export class NoticiasService {

    constructor(private http: HttpClient) { }

    getTopHeadLines(){
        return this.http.get<RespuestaTopHeadLines>(`http://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=d09124ffdc9f4ebb9eb9cd36089e2544`);
    }
}
