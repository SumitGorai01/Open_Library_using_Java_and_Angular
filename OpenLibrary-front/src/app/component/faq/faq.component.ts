
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  openIndex: number | null = null;

  faqItems = [
    {
      question: 'What is OpenLibrary?',
      answer: 'OpenLibrary is a free, digital library that offers access to millions of books in PDF format. Users can read and contribute to a vast collection of books online.',
    },
    {
      question: 'How often are new books added?',
      answer: 'New books and editions are added regularly by contributors and libraries worldwide. You can explore newly added books in various categories frequently.',
    },
    {
      question: 'How can I contribute to OpenLibrary?',
      answer: 'You can contribute by adding new books, editing existing records, or donating scanned books. Join our community to help expand the world’s digital library!',
    },
    {
      question: 'What types of books does OpenLibrary offer?',
      answer: 'OpenLibrary provides access to a diverse collection, including fiction, non-fiction, academic, historical, and public domain books, all available in PDF format.',
    },
    {
      question: 'Can I take quizzes on OpenLibrary?',
      answer: 'Yes! OpenLibrary offers quizzes on various topics, allowing users to test their knowledge and enhance their learning experience. Explore quizzes based on different subjects and challenge yourself!',
    },
    {
      question: 'How can I connect with other book enthusiasts?',
      answer: 'Engage with the OpenLibrary community through our forums, discussion boards, and social media channels. Share your favorite reads, discuss book topics, and participate in quizzes!',
    },
  ];
  

  toggleAnswer(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
