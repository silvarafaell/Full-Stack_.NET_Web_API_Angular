import { UserUpdate } from './../../../models/identity/UserUpdate';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '@app/services/account.service';
import { ValidatorField } from './../../../helpers/ValidatorField';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  userUpdate = {} as UserUpdate;
  form!: FormGroup;

  constructor(private fb: FormBuilder, public accountService: AccountService, private router: Router, private toaster: ToastrService, private spinner: NgxSpinnerModule) { }

  ngOnInit(): void {
    this.validation();
    this.carregarUsuario();
  }

  carregarUsuario(): void {
    this.accountService.getUser();

  }

  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('password', 'confirmePassword')
    };

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      descricao: ['', Validators.required],
      funcao: ['', Validators.required],
      password: ['', [Validators.minLength(4), Validators.nullValidator]],
      confirmePassword: ['', Validators.nullValidator]
    }, formOptions);
  }

  // Conveniente para pegar um FormField apenas com a letra F
  get f(): any { return this.form.controls; }

  onSubmit(): void {

    // Vai parar aqui se o form estiver inválido
    if (this.form.invalid) {
      return;
    }
  }

  public resetForm(event: any): void {
    event.preventDefault();
    this.form.reset();
  }
}