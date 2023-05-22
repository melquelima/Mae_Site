import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CustomAlertService {
  private sw = Swal
  constructor() { }


  NewCategoria(categorias): Promise<any> {

    var htmlOptions= categorias.map((a)=>`<option value="${a.categoria}">${a.categoria}</option>`)
    htmlOptions = [...new Set(htmlOptions)].join('\r\n')

    return Swal.fire({
      title: 'Informe a nova categoria',
      html: ` 
      <style>
        .swal2-html-container{
          overflow-x: hidden;
        }
      </style>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group has-label">
            <label class="control-label" for="">Categoria
            </label>
            <input type="text" list="typeList"  class="form-control custom-select custom-select-sm" id="categoria"/>
            <datalist id="typeList">
            ${htmlOptions} 
            </datalist>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group has-label">
            <label class="control-label" for="">Tipo
            </label>
            <input type="text" class="form-control" id="tipo">
          </div>
        </div>
      </div>
      `,
      stopKeydownPropagation: false,
      showCancelButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      preConfirm: () => {
        var categoria = String($('input[id="categoria"]').val()).trim()
        var tipo      = String($('input[id="tipo"]').val()).trim()

        if (categoria.trim() == "") {
          return Swal.showValidationMessage('categoria inválida')
        }
        if (tipo.trim() == "") {
          return Swal.showValidationMessage('tipo inválido')
        }

        return new Promise((resolve, reject) => {

          // get your inputs using their placeholder or maybe add IDs to them
          resolve({
            categoria: categoria.trim(),
            tipo:tipo.trim()
          });

          // maybe also reject() on some condition
        });
      }
    })
  }


  NewTag(): Promise<any> {

    return Swal.fire({
      title: 'Informe a nova categoria',
      html: ` 
      <style>
        .swal2-html-container{
          overflow-x: hidden;
        }
      </style>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group has-label">
            <label class="control-label" for="">Tag
            </label>
            <input type="text"  class="form-control" id="tag"/>
          </div>
        </div>
      </div>
      `,
      stopKeydownPropagation: false,
      showCancelButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      preConfirm: () => {
        var tag = String($('input[id="tag"]').val()).trim()

        if (tag.trim() == "") {
          return Swal.showValidationMessage('tag inválida')
        }

        return new Promise((resolve, reject) => {

          // get your inputs using their placeholder or maybe add IDs to them
          resolve({
            tag: tag.trim()
          });

          // maybe also reject() on some condition
        });
      }
    })
  }

}





