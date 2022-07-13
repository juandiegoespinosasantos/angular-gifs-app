import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    public label: string = "Buscar";
    public placeholder: string = "Buscar GIFs...";

    @ViewChild("txtSearch")
    public txtSearch!: ElementRef<HTMLInputElement>;

    constructor() { }

    ngOnInit(): void {
    }

    public search(): void {
        const value = this.txtSearch.nativeElement.value;

        console.log(value);

        this.txtSearch.nativeElement.value = "";
    }
}
