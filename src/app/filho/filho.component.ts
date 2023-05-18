import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() informacaoFilho: string;// recebe a variavel 'informacao' do pai.component.ts

  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    console.log('------------ informacaoFilho -> ', this.informacaoFilho);
  }

  valueChange(value: string): void {
    console.log('--- entrei na desgraca do valuechange---');
    this.textChange.emit(value);
  }

}
