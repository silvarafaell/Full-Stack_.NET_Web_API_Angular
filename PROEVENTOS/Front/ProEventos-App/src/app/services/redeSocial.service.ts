import { take } from 'rxjs/operators';
import { RedeSocial } from '@app/models/RedeSocial';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedeSocialService {
  baseURL = environment.apiURL + 'api/redesSociais';

  constructor(private http: HttpClient) { }

  /**
   *
   * @param origem Precisa passar a palavra 'palestrante' ou 'evento' - Escrito em minúsculo.
   * @param id Precisa passar o PalestranteId ou o EventoId dependendo da sua Origem.
   * @returns Observable<RedeSocial[]>
   */
  public getRedesSociais(origem: string, id: number): Observable<RedeSocial[]> {
    let URL =
      id === 0
        ? `${this.baseURL}/${origem}`
        : `${this.baseURL}/${origem}/${id}`;

    return this.http.get<RedeSocial[]>(URL).pipe(take(1));
  }

}
