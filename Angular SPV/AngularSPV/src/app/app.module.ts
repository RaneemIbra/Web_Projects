import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { GridComponent } from './grid/grid.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NodeComponent, GridComponent, ToolBarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
