import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CreateTimetableModalComponent} from "../create-timetable-modal/create-timetable-modal.component";

interface FoodNode {
  name: string;
  children?: FoodNode[];
  value?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Doctor list speciality',
    children: [
      {name: 'Create Timetable',},
      {name: 'Show Timetable'},
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-side-doctor-bar',
  templateUrl: './side-bar-doctor.component.html',
  styleUrls: ['./side-bar-doctor.component.scss']
})
export class SideBarDoctorComponent {

  constructor(private router: Router,
              private dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  onClickLink(value: string): void {
    if (value === 'Show Timetable') {
      this.router.navigate(['cabinet/doctorTimetable']);
    } else if (value === 'Create Timetable') {
      this.dialog.open(CreateTimetableModalComponent, {
          disableClose: true,
          enterAnimationDuration: '1s',
          exitAnimationDuration: '1s',
          hasBackdrop: false
        }
      )
    }
  };
}
