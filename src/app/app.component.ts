import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AddressFromApi {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'desafio-angular-felipe';

  cep: string = '';
  street: string = '';
  number: string = '';
  complement: string = '';
  district: string = '';
  city: string = '';
  state: string = '';

  cepError: boolean = false;

  constructor(private http: HttpClient) {}

  onInputCep(): void {
    if (this.cep.length === 8) {
      this.http
        .get<AddressFromApi>(`https://viacep.com.br/ws/${this.cep}/json/`)
        .subscribe((data) => {
          if (!!data.erro) {
            this.cepError = true;
          } else {
            this.cepError = false;
            this.street = data.logradouro;
            this.number = data.numero;
            this.complement = data.complemento;
            this.district = data.bairro;
            this.city = data.localidade;
            this.state = data.uf;
          }
        });
    }
  }
}
