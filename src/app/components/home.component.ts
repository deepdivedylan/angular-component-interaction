import {Component} from "@angular/core";

@Component({
	templateUrl: "./templates/home.html"
})

export class HomeComponent {
	fuzzySize: number = 256;

	getFuzzyUrl(): string {
		let fuzzyBase = "https://placekitten.com/g/";
		return(fuzzyBase + this.fuzzySize + "/" + this.fuzzySize);
	}

	onFuzzySizeChange(newFuzzySize: number): void {
		this.fuzzySize = newFuzzySize;
	}
}
