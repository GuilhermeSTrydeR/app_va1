import { Component, OnInit } from '@angular/core';
// import { format } from 'path';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

    cadastrar(){

        alert('Cadastro Realizado com Sucesso!');

    
    }

  

  ngOnInit() {
  }

}
