import { Component, OnInit} from '@angular/core';
import { ManageFacade } from '@selligent/boarding/domain';

@Component({
  selector: 'boarding-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
    


    constructor(private manageFacade: ManageFacade) {
    }


    ngOnInit() {
    }

}

