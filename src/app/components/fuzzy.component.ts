import {Component} from "@angular/core";

@Component({
	selector: "fuzzy",
	templateUrl: "./templates/fuzzy.html"
})

export class FuzzyComponent {

	fuzzyBase: string = "https://placekitten.com/g/";
	fuzzySize: number = 256;

	setFuzzySize(newFuzzySize: number): void {
		this.fuzzySize = newFuzzySize;
	}

	getFuzzyUrl(): string {
		return(this.fuzzyBase + this.fuzzySize + "/" + this.fuzzySize);
	}
}
