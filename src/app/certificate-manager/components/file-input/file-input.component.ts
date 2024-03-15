import { Component, EventEmitter, Output } from '@angular/core';


export interface IFileContent {
  commonName: string,
  issuerCN: string,
  validFrom: Date,
  validTo: Date,
}

@Component({
  selector: 'file-input',
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.scss'
})
export class FileInputComponent {


  @Output() fileChange = new EventEmitter<IFileContent>()

  public fileContent?: IFileContent;
  public isDragging: boolean = false;

  public stopDrag(event: Event): void {
    this.isDragging = false;
    event.preventDefault();
    event.stopPropagation();
  }

  public onDragOver(event: Event): void {
    event.preventDefault();
    this.isDragging = true;
  }

  public onDrop(event: DragEvent): void {
    event.preventDefault();

    this.isDragging = false;

    const dt = event.dataTransfer;
    let file: File;

    if (!dt) throw 'dataTransfer дорівнює null';

    if (dt.items) {
      const item = dt.items[0]; console.log(dt.items[0])
      if (!item) throw 'Відсутній файл в items у dataTransfer при події onDrop';
      if (item.kind !== 'file') throw 'В items у dataTransfer знаходиться строка, а не файл';
      file = item.getAsFile() as File;
    } else {
      const item = dt.files[0];
      if (!item) throw 'Відсутній файл в files у dataTransfer при події onDrop';
      file = item;
    }

    if (file) {
      this.readCertificate(file);
    }

  }

  public onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];

    if (file) {
      this.readCertificate(file);
    }
  }

  private readCertificate(file: File): void {
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const target = e.target;
      if (!target) throw 'Відсутній e.target під час reader.onload';
      const content = target.result;
      if (!content) throw 'Відсутній result під час reader.onload';


    };

  }







}
