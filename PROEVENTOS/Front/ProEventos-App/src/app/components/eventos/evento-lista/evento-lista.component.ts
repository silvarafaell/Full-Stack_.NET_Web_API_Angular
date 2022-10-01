import { PaginateResult, Pagination } from './../../../models/Pagination';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Evento } from "src/app/models/Evento";
import { EventoService } from "src/app/services/Evento.service";



@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {

  modalRef?: BsModalRef;

  public eventos: Evento[] = [];
  public larguraImagem = 150;
  public margemImagem = 2;
  public exibirImagem = true;
  public eventoId = 0;
  public pagination = {} as Pagination;


  public filtrarEventos(evt: any): void {
    this.eventoService.getEventos(
      this.pagination.currentPage,
      this.pagination.itemsPerPage,
      evt.value
    ).subscribe(
      (paginateResult: PaginateResult<Evento[]>) => {
        this.eventos = paginateResult.result;
        this.pagination = paginateResult.pagination;
      },
      (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao Carregar os Eventos', 'Error!');
      }
    )
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.pagination = { currentPage: 1, itemsPerPage: 3, totalItems: 1 } as Pagination;

    this.carregarEventos();
  }

  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  public mostraImagem(imagemURL: string): string {
    return imagemURL !== ''
      ? `${environment.apiURL}resources/images/${imagemURL}`
      : 'assets/img/semImagem.jpeg'
  }

  public carregarEventos(): void {
    this.spinner.show();

    this.eventoService.getEventos(this.pagination.currentPage,
      this.pagination.itemsPerPage).subscribe(
        (paginateResult: PaginateResult<Evento[]>) => {
          this.eventos = paginateResult.result;
          this.pagination = paginateResult.pagination;
        },
        (error: any) => {
          this.spinner.hide();
          this.toastr.error('Erro ao Carregar os Eventos', 'Error!');
        },
      ).add(() => this.spinner.hide());
  }

  openModal(event: any, template: TemplateRef<any>, eventoId: number): void {
    event.stopPropagation();
    this.eventoId = eventoId;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  public pageChanged(event): void {
    this.pagination.currentPage = event.page;
    this.carregarEventos();
  }

  confirm(): void {
    this.modalRef?.hide();
    this.spinner.show();

    this.eventoService.deleteEvento(this.eventoId).subscribe(
      (result: any) => {
        if (result.message === 'Deletado') {
          this.toastr.success('O Evento foi deletado com Sucesso.', 'Deletado!');
          this.spinner.hide();
          this.carregarEventos();
        }
      },
      (error: any) => {
        console.error(error);
        this.toastr.error(`Erro ao tentar deletar o evento ${this.eventoId}`, 'Erro');
        this.spinner.hide();
      },
      () => this.spinner.hide(),
    );
  }

  decline(): void {
    this.modalRef?.hide();
  }

  detalheEvento(id: number): void {
    this.router.navigate([`eventos/detalhe/${id}`]);
  }

}
