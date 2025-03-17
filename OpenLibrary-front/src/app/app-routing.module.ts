import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { CommicsBookComponent } from './component/grid/commics-book/commics-book.component';
import { ComputerBookComponent } from './component/grid/computer-book/computer-book.component';
import { HistoryBookComponent } from './component/grid/history-book/history-book.component';
import { VedasBookComponent } from './component/grid/vedas-book/vedas-book.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { ViewBooksComponent } from './pages/admin/view-books/view-books.component';
import { ViewAuthorsComponent } from './pages/admin/view-authors/view-authors.component';
import { UpdateBookComponent } from './pages/admin/update-book/update-book.component';
import { AddBookComponent } from './pages/admin/add-book/add-book.component';
import { AddAuthorComponent } from './pages/admin/add-author/add-author.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { ExamDashboardComponent } from './pages/user/exam-dashboard/exam-dashboard.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { ContactComponent } from './component/contact/contact.component';
import { FaqComponent } from './component/faq/faq.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';


const routes: Routes = [
  // this is for setup pages
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],

    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
      {
        path:'quiz/:quizId',
        component:UpdateQuizComponent,
      },
      {
        path:'view-question/:quizId/:title',
        component:ViewQuizQuestionsComponent
      },
      {
        path: 'view-users',
        component : ViewUsersComponent
      },
      {
        path: 'view-books',
        component : ViewBooksComponent
      },
      {
        path : 'add-book',
        component : AddBookComponent
      },
      {
        path : 'book/:bookId',
        component : UpdateBookComponent
      },
      {
        path: 'view-authors',
        component : ViewAuthorsComponent
      },
      {
        path : 'add-author',
        component : AddAuthorComponent
      },
      {
        path:'add-question/:quizId/:title',
        component:AddQuestionComponent
      }
      
    ],
  },
  {
    path: 'user-dashboard',
    component: ExamDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path:'',
        component:UserDashboardComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path:'load-quiz',
        component:LoadQuizComponent,
      },
      {
        path:'load-quiz/:catId',
        component:LoadQuizComponent,
      },
      {
        path:'instructions/:quizId',
        component:InstructionsComponent
      },     
    ],
  },
  {
    path:'start/:quizId',
    component:StartComponent,
    canActivate :[NormalGuard]
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'about',
    component: AboutusComponent
  }
 
 
  // {
  //   path: 'commics-book',
  //   component: CommicsBookComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'computer-book',
  //   component: ComputerBookComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'history-book',
  //   component: HistoryBookComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'vedas-books',
  //   component: VedasBookComponent,
  //   pathMatch: 'full'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
