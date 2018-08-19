import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ReceipeListComponent } from './components/receipe-list/receipe-list.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ReceipeListItemComponent } from './components/receipe-list-item/receipe-list-item.component';
import { ReceipesService } from './services/receipes/receipes.service';
import { DefaultReceipeComponent } from './components/default-receipe/default-receipe.component';
import { ReceipeDetailsComponent } from './components/receipe-details/receipe-details.component';
import { FormReceipeComponent } from './components/form-receipe/form-receipe.component';
import { ShoppingService } from './services/shopping/shopping.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { CanActivateGuard } from './guards/can-activate/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate/can-deactivate.guard';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './services/todo/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ReceipeListComponent,
    ShoppingListComponent,
    FooterComponent,
    ReceipeListItemComponent,
    DefaultReceipeComponent,
    ReceipeDetailsComponent,
    FormReceipeComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ReceipesService,
    ShoppingService,
    AuthService,
    CanActivateGuard,
    CanDeactivateGuard,
    TodoService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
