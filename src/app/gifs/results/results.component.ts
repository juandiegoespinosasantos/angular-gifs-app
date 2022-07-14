import { Component, OnInit } from "@angular/core";
import { Gif } from "../interfaces/gifs.interface";
import { GifsService } from "../services/gifs.service";

@Component({
    selector: "app-results",
    templateUrl: "./results.component.html"
})
export class ResultsComponent implements OnInit {

    constructor(private gifsService: GifsService) { }

    ngOnInit(): void {
    }

    public get results(): Gif[] {
        return this.gifsService.results;
    }
}
