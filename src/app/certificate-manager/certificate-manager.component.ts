import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate-manager',
  templateUrl: './certificate-manager.component.html',
  styleUrl: './certificate-manager.component.scss'
})
export class CertificateManagerComponent {

  onDragOver(event: Event) {
    event.preventDefault();
  }

  onDragEnter(event: Event) {
    event.preventDefault();
  }

  onDragLeave(event: Event) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFiles(files);
    }
  }

  handleFiles(files: FileList) {
    // Handle uploaded files here
    console.log(files);
  }
}
