import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { KwiknkleenService } from '../kwiknkleen service/kwiknkleen.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  displayedColumns = ['slno','district', 'name','contactperson','phone','email','action'];
  dataSource = new MatTableDataSource();
  status;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  constructor(private router:Router,private kwiknkleen:KwiknkleenService) { }

  ngOnInit() {
  }

}