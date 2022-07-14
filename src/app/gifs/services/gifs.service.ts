import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, GiphyResponse } from "../interfaces/gifs.interface";

const HISTORY_LIMIT: number = 10;
const GIPHY_API_BASE_URL: string = "https://api.giphy.com/v1/gifs";
const GIPHY_API_KEY: string = "WO4lPnBlJqabTGbxmfQLVf3IBvHZ34qz";
const LOCAL_STORAGE_KEY_SEARCH_PARAM = "searchParam";
const LOCAL_STORAGE_KEY_HISTORY = "history";
const LOCAL_STORAGE_KEY_RESULTS = "results";

@Injectable({
    providedIn: "root"
})
export class GifsService {

    private _searchParam: string = "";
    private _history: string[] = [];
    private _results: Gif[] = [];

    constructor(private httpClient: HttpClient) {
        this.loadData();
    }

    public get searchParam(): string {
        return this._searchParam;
    }

    public get history(): string[] {
        return [...this._history];
    }

    public get results(): any[] {
        return [...this._results];
    }

    public searchGifs(searchParam: string = ""): any {
        searchParam = searchParam.trim().toUpperCase();

        if (searchParam.length == 0) return;

        if (!this._history.includes(searchParam)) {
            if (this._history.length === HISTORY_LIMIT) this._history.pop();

            this._history.unshift(searchParam);
        }

        this._searchParam = searchParam;
        this.saveData(LOCAL_STORAGE_KEY_SEARCH_PARAM, this._searchParam);
        this.saveData(LOCAL_STORAGE_KEY_HISTORY, this._history);

        this.getGifs(searchParam);
    }

    private loadData(): void {
        console.log("Retriving data from LocalStorage...");

        this._searchParam = localStorage.getItem(LOCAL_STORAGE_KEY_SEARCH_PARAM) || "";
        this._history = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_HISTORY)!) || [];
        this._results = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_RESULTS)!) || [];
    }

    private saveData(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    private getGifs(searchParam: string): any {
        const url = GIPHY_API_BASE_URL + "/search";
        const params: HttpParams = new HttpParams()
            .set("api_key", GIPHY_API_KEY)
            .set("q", searchParam)
            .set("limit", HISTORY_LIMIT);

        this.httpClient
            .get<GiphyResponse>(url, {
                params: params
            }).subscribe((resp: GiphyResponse) => {
                console.log(resp);

                this._results = resp.data;
                this.saveData(LOCAL_STORAGE_KEY_RESULTS, this._results);

                return resp;
            });
    }
}
