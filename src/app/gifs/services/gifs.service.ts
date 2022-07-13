import { Injectable } from "@angular/core";

const historyLimit: number = 10;

@Injectable({
    providedIn: "root"
})
export class GifsService {

    private _history: string[] = [];

    public get history(): string[] {
        return [...this._history];
    }

    public searchGifs(value: string = ""): void {
        value = value.trim().toUpperCase(); // Lo paso a mayúsculas y sin espacios

        if (value.length == 0) return; // Si está vacío no continúo

        if (this._history.includes(value)) return; // Si ya está almacenado no cotinúo

        if (this._history.length === historyLimit) this._history.pop(); // Antes de insertar elimino el último item si ya llegué al límite

        this._history.unshift(value);

        console.log(this._history);
    }
}
