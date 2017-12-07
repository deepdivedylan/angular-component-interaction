import {Component, EventEmitter, Output} from "@angular/core";

@Component({
	selector: "fuzzy",
	templateUrl: "./templates/fuzzy.html"
})

export class FuzzyComponent {
	fuzzySize: number = 256;
	@Output()
	fuzzyChangeEvent = new EventEmitter<number>();

	setFuzzySize(newFuzzySize: number): void {
		this.fuzzySize = newFuzzySize;
		this.fuzzyChangeEvent.emit(this.fuzzySize);
	}
}
