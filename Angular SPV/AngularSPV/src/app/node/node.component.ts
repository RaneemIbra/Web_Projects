import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css'],
})
export class NodeComponent {
  @Input() row!: number;
  @Input() col!: number;
  @Input() entry!: boolean;
  @Input() target!: boolean;
  @Input() wall!: boolean;
  @Input() mouseDown!: boolean;
  @Input() distance!: number;
  @Input() isVisited!: boolean;
  @Input() previousNode!: NodeComponent;
}
