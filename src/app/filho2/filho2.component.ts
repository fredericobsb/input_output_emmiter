import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho2',
  templateUrl: './filho2.component.html',
  styleUrls: ['./filho2.component.css']
})
export class Filho2Component implements OnInit {

  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();

  valueChange(value: string): void {
    this.textChange.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
