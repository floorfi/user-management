import { Component, OnChanges, ContentChild, Input, TemplateRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-wrapper',
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.css']
})
export class ListWrapperComponent implements OnChanges {

  @Input() items: any[] = [];
  @Input() mode: string = 'card';

  @ContentChild(TemplateRef) listItemTemplate: any;

  filteredItems: any[] = [];

  searchText: string = '';

  currentPage: number = 0;
  entryCount: number = 0;
  entriesPerPage: number = 5;

  ngOnChanges(): void {
    this.entryCount = this.items.length;
    this.filterItems();
  }

  pageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.entriesPerPage = event.pageSize;
    this.filterItems();
  }

  filterItems(): void {
    let begin = (this.currentPage) * this.entriesPerPage;
    let end = begin + this.entriesPerPage;
    this.filteredItems = this.items.slice(begin, end);
  }

}