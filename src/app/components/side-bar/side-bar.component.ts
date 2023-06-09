import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Router} from "@angular/router";

interface FoodNode {
  name: string;
  children?: FoodNode[];
  value?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Список лікарів за спеціальністю',
    children: [
      {name: 'Педіатр',},
      {name: 'Терапевт'},
      {name: 'Сімейний лікар'},
      {name: 'Кардіолог'},
      {name: 'Отоларинголог'},
      {name: 'Нерволог'},
      {name: 'Хірург'},
    ],
  },
  {
    name: 'Медична картка',
    children: [
      {name: 'Останій візит'},
      {name: 'Вся історія'},
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
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(private router: Router) {
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

    if (value === 'Останій візит' || value === 'Вся історія') {
      this.router.navigate(['cabinet/cardList'], {queryParams: {period: value}})
    } else {
      this.router.navigate([`cabinet/doctorList/${value.toLowerCase()}`])
    }
  };
}
