import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector:"info-dialog",
    templateUrl:"./info-dialog.html",
    styleUrls:['./info-dialog.scss']
})

export class InfoDialogComponent implements OnInit {
    movie = {name:''};

    constructor(private dialogRef: MatDialogRef<InfoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: {movie: {name:string}}) {

        this.movie = data.movie;
    }

    ngOnInit() {  }

    closeDialog() {
        this.dialogRef.close();
    }

}