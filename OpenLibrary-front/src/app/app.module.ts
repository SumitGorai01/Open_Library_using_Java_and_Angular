import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { app } from '../../server';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ContactComponent } from './component/contact/contact.component';
import { VedasBookComponent } from './component/grid/vedas-book/vedas-book.component';
import { CommicsBookComponent } from './component/grid/commics-book/commics-book.component';
import { ComputerBookComponent } from './component/grid/computer-book/computer-book.component';
import { HistoryBookComponent } from './component/grid/history-book/history-book.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { FaqComponent } from './component/faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { ViewBooksComponent } from './pages/admin/view-books/view-books.component';
import { ViewAuthorsComponent } from './pages/admin/view-authors/view-authors.component';
import { UpdateBookComponent } from './pages/admin/update-book/update-book.component';
import { AddBookComponent } from './pages/admin/add-book/add-book.component';
import { AddAuthorComponent } from './pages/admin/add-author/add-author.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExamDashboardComponent } from './pages/user/exam-dashboard/exam-dashboard.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import {MatTreeModule} from '@angular/material/tree';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    AboutusComponent,
    AddQuizComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ContactComponent,
    VedasBookComponent,
    CommicsBookComponent,
    ComputerBookComponent,
    HistoryBookComponent,
    FeedbackComponent,
    FaqComponent,
    ViewQuizzesComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    ViewUsersComponent,
    ViewBooksComponent,
    ViewAuthorsComponent,
    UpdateBookComponent,
    AddBookComponent,
    AddAuthorComponent,
    UpdateUserComponent,
    ExamDashboardComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatExpansionModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ 
      showForeground: true 
    }),
    
  ],
  providers: [
    provideClientHydration(),
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

// run this command to create angular app
// ng new exam-front --no-standalone

