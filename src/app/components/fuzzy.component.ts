import {Component, EventEmitter, Output} from "@angular/core";

@Component({
	selector: "fuzzy",
	templateUrl: "./templates/fuzzy.html"
})

export class FuzzyComponent {

	fuzzyBase: string = "https://placekitten.com/g/";
	fuzzySize: number = 256;
	@Output()
	fuzzyChangeEvent = new EventEmitter<number>();

	setFuzzySize(newFuzzySize: number): void {
		this.fuzzySize = newFuzzySize;
		this.fuzzyChangeEvent.emit(this.fuzzySize);
	}

	getFuzzyUrl(): string {
		return(this.fuzzyBase + this.fuzzySize + "/" + this.fuzzySize);
	}
}
