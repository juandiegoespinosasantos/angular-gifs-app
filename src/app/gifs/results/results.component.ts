import { Component, OnInit } from "@angular/core";
import { GifsService } from "../services/gifs.service";

@Component({
    selector: "app-results",
    templateUrl: "./results.component.html"
})
export class ResultsComponent implements OnInit {

    constructor(private gifsService: GifsService) { }

    ngOnInit(): void {
    }

    public get results(): any[] {
        return this.gifsService.results;
    }
}
