import {Component} from "@angular/core";

@Component({
	templateUrl: "./templates/home.html"
})

export class HomeComponent {
	asleep: boolean = false;
	fuzzySize: number = 256;

	getFuzzyUrl(): string {
		let fuzzyBase = "https://placekitten.com/g/";
		return(fuzzyBase + this.fuzzySize + "/" + this.fuzzySize);
	}

	onAsleepChange(newAsleep: boolean): void {
		this.asleep = newAsleep;
	}

	onFuzzySizeChange(newFuzzySize: number): void {
		this.fuzzySize = newFuzzySize;
	}
}
