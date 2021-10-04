import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Item } from "../models/model";

@Component({
    selector:"info-dialog",
    templateUrl:"./info-dialog.html",
    styleUrls:['./info-dialog.scss']
})

export class InfoDialogComponent implements OnInit {
    movie?:Item;

    constructor(private dialogRef: MatDialogRef<InfoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: {movie: Item}) {

        this.movie = data.movie;
    }

    ngOnInit() {  }

    closeDialog() {
        this.dialogRef.close();
    }

}