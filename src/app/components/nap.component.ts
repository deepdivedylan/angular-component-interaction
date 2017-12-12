import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: "nap",
	templateUrl: "./templates/nap.html"
})

export class NapComponent implements OnInit {
	asleep: boolean = false;
	napForm: FormGroup;
	napStatus: string = "kitty is awake";
	@Output()
	asleepEmitter = new EventEmitter<boolean>();

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
		this.asleep = true;
		this.napStatus = "kitty is asleep";
		this.sleep(ms).then(() => {
			this.asleep = false;
			this.asleepEmitter.emit(this.asleep);
			this.napStatus = "kitty is awake";
		});
	}

	startNap() : void {
		this.takeNap(this.napForm.controls.napTime.value);
	}
}
