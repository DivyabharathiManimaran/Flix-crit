import { Component, HostListener, OnInit, ɵpatchComponentDefWithScope } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { DashboardService } from "./services/dashboard.service";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { InfoDialogComponent } from "./info-dialog/info-dialog.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";


@Component( {
    selector:'dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.scss']
}    
)

export class DashboardComponent implements OnInit{
    customOptions: OwlOptions = {
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4,
          nav: true
        }
      },
      nav: false
    }
    response:any;
    langCategory:any[]=[];

      constructor(private readonly dashboardService: DashboardService,
        private dialog: MatDialog) {
      }

      ngOnInit() {
        this.dashboardService.getItems().subscribe((resp) => {
            this.response = resp;
            this.langCategory = this.response.dashboard;
            console.log(this.langCategory);
        })
    }

    setSelected(movie:{}) {
      const dialogConfig = new MatDialogConfig();
        dialogConfig.width='400px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.panelClass = 'dialog-border';
        dialogConfig.data = { movie: movie };
        this.dialog.open(InfoDialogComponent, dialogConfig);
    }

}