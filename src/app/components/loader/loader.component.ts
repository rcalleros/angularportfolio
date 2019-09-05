//loader.interceptor.ts
import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loading',
  template: '<div *ngIf="loading" class="progress-loader-overlay"><div class="loader"></div></div>',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent {
  loading: boolean;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });
  }
}
