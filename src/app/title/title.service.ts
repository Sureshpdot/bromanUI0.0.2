import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class CommonTitle implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    title = "Broman - ";

}