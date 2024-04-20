import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
})
export class ToolBarComponent {
  entryPointChanged: boolean = false;
  targetPointChanged: boolean = false;
  @Output() refreshPage = new EventEmitter<void>();
  @Output() clearGrid = new EventEmitter<void>();
  @Output() start = new EventEmitter<void>();

  onRefreshPage() {
    this.refreshPage.emit();
  }

  onClearGrid() {
    this.clearGrid.emit();
  }

  onStart() {
    this.start.emit();
  }
}
