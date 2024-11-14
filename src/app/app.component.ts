import { Component, OnInit } from '@angular/core';
import { NomDuServiceService } from './nom-du-service.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { piste } from './Piste';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestionSkiFront';

  form: boolean = false;
  closeResult!: string;
  listpistes: any;
  piste!:any;

  constructor(private pisteService: NomDuServiceService, private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.getAllpiste();
    console.log(this.listpistes)
    this.piste={
      numPiste : null,
      namePiste: null,
      color:null,
      length : null,
      slope :null
    }

  }

  getAllpiste(){
    return this.pisteService.getAllPiste().subscribe(res=>{
      this.listpistes = res;
    });
  }
  addpiste(p: any) {
    this.pisteService.addPiste(p).subscribe(() => {
      this.getAllpiste();
      this.form = false;
    });
  }


  open(content: any, action: any) {
    if (action != null)
      this.piste = action
    else
      this.piste = new piste();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  cancel() {
    this.form = false;
  }
}