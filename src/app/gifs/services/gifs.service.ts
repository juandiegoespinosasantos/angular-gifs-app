import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, GiphyResponse } from "../interfaces/gifs.interface";

const historyLimit: number = 10;
const giphyAPIBaseUrl: string = "http://api.giphy.com/v1/gifs/search";
const giphyAPIKey: string = "WO4lPnBlJqabTGbxmfQLVf3IBvHZ34qz";
const localStorageHistoryKey = "history";

@Injectable({
    providedIn: "root"
})
export class GifsService {

    private _history: string[] = [];
    private _results: Gif[] = [];

    constructor(private httpClient: HttpClient) {
        this.loadData();
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

        this.saveData();

        this.httpClient
            .get<GiphyResponse>(giphyAPIBaseUrl, {
                params: new HttpParams()
                    .set("api_key", giphyAPIKey)
                    .set("q", value)
                    .set("limit", historyLimit)
            }).subscribe((resp: GiphyResponse) => {
                console.log(resp);

                this._results = resp.data;
            });
    }

    private loadData(): void {
        console.log("Retriving data from LocalStorage...");

        this._history = JSON.parse(localStorage.getItem(localStorageHistoryKey)!) || [];
    }

    private saveData(): void {
        localStorage.setItem(localStorageHistoryKey, JSON.stringify(this._history));
    }
}
