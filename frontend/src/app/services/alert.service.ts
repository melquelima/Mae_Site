import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private sw = Swal
  constructor() { }


  confirm(title, message): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false
    })
  }

  success(title, message): Promise<any> {
    return Swal.fire({
      title: title,
      html: message,
      icon: 'success',
      customClass: {
        confirmButton: "btn btn-success"
      },
      buttonsStyling: false
    })
  }

  canceled(title, message): Promise<any> {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      customClass: {
        confirmButton: "btn btn-info",
      },
      buttonsStyling: false
    })
  }

  loading(title): Promise<SweetAlertResult<any>> {
    return this.sw.fire({
      title: title,
      showConfirmButton: false,
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading()
      }

    })
  }


  closeLoading(): void {
    this.sw.close()
  }


  async option(title, placeholder, options): Promise<any> {
    let options2 = {
      'Fruits': {
        apples: 'Apples',
        bananas: 'Bananas',
        grapes: 'Grapes',
        oranges: 'Oranges'
      },
      'Vegetables': {
        potato: 'Potato',
        broccoli: 'Broccoli',
        carrot: 'Carrot'
      },
      'icecream': 'Ice cream'
    }

    const value = await Swal.fire({
      title: title,
      input: 'select',
      inputOptions: options,
      inputPlaceholder: placeholder,
      showCancelButton: true,
    })
    return Promise.resolve(value);
  }

}





