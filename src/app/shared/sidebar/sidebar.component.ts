import { Component, OnInit } from "@angular/core";
import { GifsService } from "src/app/gifs/services/gifs.service";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html"
})
export class SidebarComponent implements OnInit {

    public title: string = "GIFs App";

    constructor(private gifsService: GifsService) { }

    ngOnInit(): void {
    }

    public get history(): string[] {
        return this.gifsService.history;
    }
}
