import { OwnerService } from './../shared/_services/owner.service';
import { Owner } from './../_interface/owner.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})
export class OwnerDetailComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['name', 'dateOfBirth', 'address', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Owner>();

  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private ownerService: OwnerService
  ) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  getAllOwners() {
    this.ownerService.getOwnerJSON().subscribe(response => {
      this.dataSource.data = response as Owner[];
      this.dataSource.data.forEach(res => {
        res.isEditable = false;
      });
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: any) => {
    this.dataSource.filter = value?.target?.value.trim().toLocaleLowerCase();
  }

  editOwner(element: Owner) {
    element.isEditable = true;
  }

  saveOwner(element: Owner) {
    element.isEditable = false;
    console.log(this.dataSource.data);
  }

  deleteOwner(element: Owner, index: number) {
    this.dataSource.data.splice(index, 1);
    console.log(this.dataSource.data);
    this.dataSource.data = JSON.parse(JSON.stringify(this.dataSource.data));
  }

}
