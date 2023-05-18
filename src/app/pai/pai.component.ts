import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  @Output() informacaoPai = "Nome Frederico";//informacao que SAI do pai e vai para o filho.
  constructor() { }

  ngOnInit(): void {
    console.log('------------ informacaoPai -> ', this.informacaoPai);
  }

  text: string;

}
