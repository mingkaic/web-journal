import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent {
    title: string = "Customer App";
    name = "dude";
    layoutColor: string = "blue";

    changeColor() {
        this.layoutColor = this.layoutColor === 'blue' ? 'red' : 'blue';
    }
}
