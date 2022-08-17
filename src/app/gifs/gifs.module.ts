import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageComponent } from "./page/page.component";
import { SearchComponent } from "./search/search.component";
import { ResultsComponent } from "./results/results.component";

@NgModule({
    declarations: [
        PageComponent,
        SearchComponent,
        ResultsComponent
    ],
    exports: [
        PageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GifsModule { }
