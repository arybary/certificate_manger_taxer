import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cerificate-input',
  templateUrl: './cerificate-input.component.html',
  styleUrl: './cerificate-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CerificateInputComponent {
  @Output() fileChange = new EventEmitter<File>();
  public isDragging = false;

  public stopDrag(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  public onDragOver(event: Event): void {
    event.preventDefault();
    this.isDragging = true;
  }

  public onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    const dt = event.dataTransfer;
    if (!dt) throw new Error('dataTransfer is null');

    const file = dt.items ? dt.items[0]?.getAsFile() : dt.files[0];
    if (!file) throw new Error('No file found in dataTransfer');

    this.fileChange.emit(file);
  }

  public onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = (target.files && target.files[0]) || null;
    if (file) {
      this.fileChange.emit(file);
    }
  }
}
