import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../../services/book.service';
declare var $: any;

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit  {//AfterViewInit

  @ViewChild('carousel', { static: true })
  carousel!: ElementRef;

$: any;

  constructor(private http: HttpClient,private _book: BookService,
  ) {}
  ngOnInit(): void {
    this.loadAllBooks();
    // throw new Error('Method not implemented.');
  }
  bookList: any = [];
  filteredBookList: any = [];
  searchQuery: string = '';
  loading: boolean = false;
  currentPage = 1;
  itemsPerPage = 4;
  loadAllBooks() {
    this._book.showAllBooks().subscribe((data) => {
      this.bookList = data;
      this.filteredBookList = data;
      this.loading = false;

    });
  }  
  searchBooks() {
    this.loading = true;
  
    const query = this.searchQuery.toLowerCase().trim();
  
    if (!query) {
      this.filteredBookList = this.bookList;
    } else {
      this.filteredBookList = this.bookList.filter((book: { bookName: string; author: { authorName: string; }; }) =>
        book.bookName.toLowerCase().includes(query) ||
        book.author?.authorName?.toLowerCase().includes(query)
      );
    }
  
    // ⏳ Now wait for 400ms (for smooth UI experience) and then stop loading
    setTimeout(() => {
      this.loading = false;
      // this.updatePagination(); // (Optional) If you need to update paginatedBooks after search
    }, 400);
  }
  
  get paginatedBooks() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredBookList.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  get totalPages() {
    return Math.ceil(this.filteredBookList.length / this.itemsPerPage);
  }
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  
  goToPage(page: number) {
    this.currentPage = page;
  }
  
  // ngAfterViewInit() {
  //   $(this.carousel.nativeElement).carousel({
  //     interval: 1000, // Adjust interval time as needed (in milliseconds)
  //     pause: 'hover', // Pause on hover
  //     wrap: true // Enable wrapping of slides
  //   });
  // }
}
