import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { GetStatsService } from '../get-stats.service';

@Component({
  selector: 'corona-sats',
  templateUrl: './corona-sats.component.html',
  styleUrls: ['./corona-sats.component.css']
})
export class CoronaSatsComponent implements OnInit {
  render=[
    {key: "C", title: "asses"},
    {key: "A", title: "ctive"},
    {key: "R", title: "ecovered"},
    {key: "D", title: "eaths"}
  ];
  
  byCountry=[];

  selCountry;
  selCountryLog;

  tl_country;
  tl_active;
  tl_casses;
  tl_repair;
  tl_deaths;


  constructor( private service: GetStatsService) {  }

   ngOnInit() {
     this.service.getData()
      .subscribe(Response=>{
        this.byCountry = Response['countries'];
        this.byCountry.sort( this.compare );
      })
  }

  
   sort() {
    if (document.getElementById("dummy")) {
      document.getElementById("dummy").remove();
    }

     this.selCountryLog=this.byCountry[this.selCountry];

     this.tl_country = this.selCountryLog['country'];
     this.tl_active = this.selCountryLog['active'];
     this.tl_casses = this.selCountryLog['confirmed'];
     this.tl_repair = this.selCountryLog['recovered'];
     this.tl_deaths=this.selCountryLog['deaths'];
   }

  compare( a, b ) {
    if ( a.country < b.country ){
      return -1;
    }
    if ( a.country > b.country ){
      return 1;
    }
    return 0;
  }
}
