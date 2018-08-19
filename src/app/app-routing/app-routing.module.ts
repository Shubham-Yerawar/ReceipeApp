import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { ReceipeListComponent } from '../components/receipe-list/receipe-list.component';
import { DefaultReceipeComponent } from '../components/default-receipe/default-receipe.component';
import { ReceipeDetailsComponent } from '../components/receipe-details/receipe-details.component';
import { FormReceipeComponent } from '../components/form-receipe/form-receipe.component';
import { CanActivateGuard } from '../guards/can-activate/can-activate.guard';
import { CanDeactivateGuard } from '../guards/can-deactivate/can-deactivate.guard';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

const appRoutes : Routes = [
  {path: 'home' ,  component: HomeComponent },
  {path: 'receipe-list' ,  component: ReceipeListComponent,  canActivate : [ CanActivateGuard ],
    children : [
      {path: '' ,  component: DefaultReceipeComponent},
      {path: 'receipeForm' ,  component: FormReceipeComponent, },
      {path: ':id' ,  component: ReceipeDetailsComponent , canDeactivate : [ CanDeactivateGuard ] }
    ]},
  {path: 'shopping-list' ,  component: ShoppingListComponent , canActivate : [ CanActivateGuard ],
  canDeactivate : [ CanDeactivateGuard ]
  },
  {path : 'todo-list', component : TodoListComponent},
  {path : '' , redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


    //     children:[
    //       {path: 'shopping-list' ,redirectTo : '/shopping-list' , pathMatch:'full'}        
    //     ]
    //   }
      
    // ]