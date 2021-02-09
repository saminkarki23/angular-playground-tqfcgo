import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";

@Component({
  selector: "my-app",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  readonly name: string = "Angular";
  version: number = 7;
  @ViewChild("myElem") div: ElementRef;
  constructor(private renderer: Renderer2) {}
  colorOptions = ["red", "blue", "yellow", "green"];

  colorChange(e) {
    this.renderer.setStyle(this.div.nativeElement, "backgroundColor", e);
    // this.div.nativeElement.setAttribute("backgroundColor", "red");
  }

  onVersionRelease(): void {
    this.version += 1;
  }
}
