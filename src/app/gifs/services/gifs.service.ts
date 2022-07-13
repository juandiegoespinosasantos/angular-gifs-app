import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class GifsService {

    private _history: string[] = [];

    public get history(): string[] {
        return [...this._history];
    }

    public searchGifs(query: string): void {
        this._history.unshift(query);

        console.log(this._history);
    }
}
