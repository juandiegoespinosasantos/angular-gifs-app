import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    public label: string = "Buscar";
    public placeholder: string = "Buscar GIFs...";
    
    constructor() { }

    ngOnInit(): void {
    }
}
