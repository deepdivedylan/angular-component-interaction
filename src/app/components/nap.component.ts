import {Component, EventEmitter, Output} from "@angular/core";

@Component({
	selector: "nap",
	templateUrl: "./templates/nap.html"
})

export class NapComponent {

	napStatus: string = "kitty is awake";

	sleep(ms: number): Promise<any> {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async takeNap(ms: number): Promise<any> {
		this.napStatus = "kitty is asleep";
		this.sleep(ms);
		this.napStatus = "kitty is awake";
	}
}
