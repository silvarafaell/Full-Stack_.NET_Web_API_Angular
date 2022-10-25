import { Pagination } from './../../../models/Pagination';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { PalestranteService } from '@app/services/palestrante.service';
import { Palestrante } from '@app/models/Palestrante';
import { PaginatedResult } from '@app/models/Pagination';

@Component({
  selector: 'app-palestrante-lista',
  templateUrl: './palestrante-lista.component.html',
  styleUrls: ['./palestrante-lista.component.scss']
})
export class PalestranteListaComponent implements OnInit {
  public palestrantes: Palestrante[] = [];
  public palestranteId = 0;
  public pagination = {} as Pagination;

  constructor(
    private palestranteService: PalestranteService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  public ngOnInit(): void {
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 3,
      totalItems: 1,
    } as Pagination;

    this.carregarPalestrantes();
  }

  termBuscaChanged: Subject<string> = new Subject<string>();

  public filtrarPalestrantes(evt: any): void {
    if (this.termBuscaChanged.observers.length === 0) {
      this.termBuscaChanged.pipe(debounceTime(1000)).subscribe(
        filtrarPor => {
          this.spinner.show();
          this.palestranteService.getPalestrantes(
            this.pagination.currentPage,
            this.pagination.itemsPerPage,
            filtrarPor
          ).subscribe(
            (paginateResult: PaginatedResult<Palestrante[]>) => {
              this.palestrantes = paginateResult.result;
              this.pagination = paginateResult.pagination;
            },
            (error: any) => {
              this.spinner.hide();
              this.toastr.error('Erro ao Carregar os Palestrantes', 'Error!');
            }
          ).add(() => this.spinner.hide())
        }
      )
    }
    this.termBuscaChanged.next(evt.value);
  }

  public carregarPalestrantes(): void {
    this.spinner.show();

    this.palestranteService
      .getPalestrantes(this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe(
        (paginatedResult: PaginatedResult<Palestrante[]>) => {
          this.palestrantes = paginatedResult.result;
          this.pagination = paginatedResult.pagination;
        },
        (error: any) => {
          this.spinner.hide();
          this.toastr.error('Erro ao Carregar os Palestrantes', 'Erro!');
        }
      )
      .add(() => this.spinner.hide());
  }

}
