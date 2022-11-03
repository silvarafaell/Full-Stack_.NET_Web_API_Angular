import { map, debounceTime, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PalestranteService } from '@app/services/palestrante.service';
import { ToastrService } from 'ngx-toastr';
import { Palestrante } from '@app/models/Palestrante';

@Component({
  selector: 'app-palestrante-detalhe',
  templateUrl: './palestrante-detalhe.component.html',
  styleUrls: ['./palestrante-detalhe.component.scss']
})
export class PalestranteDetalheComponent implements OnInit {
  public form!: FormGroup;
  public situacaoDoForm = '';
  public corDaDescricao = '';

  constructor(
    private fb: FormBuilder,
    public palestranteService: PalestranteService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.validation();
    this.verificaForm();
    this.carregarPalestrante();
  }

  private validation(): void {
    this.form = this.fb.group({
      miniCurriculo: ['']
    })
  }

  private carregarPalestrante(): void {
    this.spinner.show();

    this.palestranteService
      .getPalestrante()
      .subscribe(
        (palestrante: Palestrante) => {
          this.form.patchValue(palestrante);
        },
        (error: any) => {
          this.toastr.error('Erro ao Carregar o Palestrante', 'Erro');
        }
      )


  }

  public get f(): any {
    return this.form.controls;
  }

  private verificaForm(): void {
    this.form.valueChanges
      .pipe(
        map(() => {
          this.situacaoDoForm = 'Minicurriculo está sendo Atualizado!'
          this.corDaDescricao = 'text-warning'
        }),
        debounceTime(1000),
        tap(() => this.spinner.show())
      ).subscribe(
        () => {
          this.palestranteService.put({ ...this.form.value })
            .subscribe(
              () => {
                this.situacaoDoForm = 'Minicurriculo foi atualizado!';
                this.corDaDescricao = 'text-sucess';

                setTimeout(() => {

                }, 2000);
              },
              () => {
                this.toastr.error('Erro ao tentar atualizar Palestrante', 'Erro')
              }
            )
            .add(() => this.spinner.hide());

        });
  }
}
