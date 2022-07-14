import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

const historyLimit: number = 10;
const giphyAPIBaseUrl: string = "http://api.giphy.com/v1/gifs/search";
const giphyAPIKey: string = "WO4lPnBlJqabTGbxmfQLVf3IBvHZ34qz";

@Injectable({
    providedIn: "root"
})
export class GifsService {

    private _history: string[] = [];
    private _results: any[] = [];

    constructor(private httpClient: HttpClient) {
    }

    public get history(): string[] {
        return [...this._history];
    }

    public get results(): any[] {
        return [...this._results];
    }

    public searchGifs(value: string = ""): void {
        value = value.trim().toUpperCase();

        if (value.length == 0) return;

        if (this._history.includes(value)) return;

        if (this._history.length === historyLimit) this._history.pop();

        this._history.unshift(value);

        console.log(this._history);

        this.httpClient
            .get(giphyAPIBaseUrl, {
                params: new HttpParams()
                    .set("api_key", giphyAPIKey)
                    .set("q", value)
                    .set("limit", historyLimit)
            }).subscribe((resp: any) => {
                console.log(resp);

                this._results = resp.data;
            });
    }
}
