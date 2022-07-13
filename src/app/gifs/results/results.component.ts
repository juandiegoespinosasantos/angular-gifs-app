import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-results",
    templateUrl: "./results.component.html"
})
export class ResultsComponent implements OnInit {

    public lipsum: string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex animi eveniet, sint
     ea soluta sed eum suscipit repellat minus nobis ad iste vero libero vitae officiis, corrupti aliquam consequatur!`;

    constructor() { }

    ngOnInit(): void {
    }
}
