import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { TopicListComponent } from './topic/topic-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        routing ],
    declarations: [ 
        AppComponent, 
        WelcomeComponent,
        TopicListComponent,
        PageNotFoundComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
