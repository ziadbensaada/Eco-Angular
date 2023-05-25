import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() title:string=""
  @Input() data:any[]=[]
  @Output() selectValue=new EventEmitter()
  DetectChange(event:any){
    this.selectValue.emit(event)
  }
}