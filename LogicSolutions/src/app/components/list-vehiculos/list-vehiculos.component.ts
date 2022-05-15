import { FormVehiculComponent } from './../form-vehicul/form-vehicul.component';

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-vehiculos',
  templateUrl: './list-vehiculos.component.html',
  styleUrls: ['./list-vehiculos.component.css']
})
export class ListVehiculosComponent implements OnInit {

  constructor(private modalService: NgbModal) { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  clickAddVehiculo() {
    const modal = this.modalService.open(FormVehiculComponent);
    modal.result.then(
      this.handleModalFormClose.bind(this),
      this.handleModalFormClose.bind(this)
    )
    }

    handleModalFormClose() {
      alert('se ha cerrado el modal');
  }

}
