import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: "nap",
	templateUrl: "./templates/nap.html"
})

export class NapComponent implements OnInit {
	napForm: FormGroup;
	napStatus: string = "kitty is awake";

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.napForm = this.formBuilder.group({
			napTime: [2000, [Validators.required, Validators.min(0), Validators.max(10000)]]
		});
	}

	sleep(ms: number): Promise<any> {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async takeNap(ms: number): Promise<any> {
		this.napStatus = "kitty is asleep";
		this.sleep(ms).then(() => this.napStatus = "kitty is awake");
	}

	async startNap() : Promise<any> {
		return(this.takeNap(this.napForm.controls.napTime.value));
	}
}
