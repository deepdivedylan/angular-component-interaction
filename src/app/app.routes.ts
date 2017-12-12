import {RouterModule, Routes} from "@angular/router";
import {FuzzyComponent} from "./components/fuzzy.component";
import {HomeComponent} from "./components/home.component";
import {APP_BASE_HREF} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DeepDiveInterceptor} from "./services/deep.dive.interceptor";
import {NapComponent} from "./components/nap.component";


export const allAppComponents = [FuzzyComponent, HomeComponent, NapComponent];

export const routes: Routes = [
	{path: "", component: HomeComponent}
];

export const appRoutingProviders: any[] = [
	{provide: APP_BASE_HREF, useValue: window["_base_href"]},
	{provide: HTTP_INTERCEPTORS, useClass: DeepDiveInterceptor, multi: true}
];

export const routing = RouterModule.forRoot(routes);
