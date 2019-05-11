import { Component, OnChanges,
            OnInit, Input, Output, EventEmitter
         } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit {

    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;
    // This is always called first
    constructor() {
        console.log('>>>>>inside constructor');
    }
    // This event fires when it detect the change
    ngOnChanges() {
        console.log('>>>>>inside onchanges');
        this.starWidth = this.rating * 86 / 6;
    }

    // This fires after onchanges
    ngOnInit() {
        console.log('>>>>>inside init');
    }

    // This fires when you loose the context
    ngOnDestory() {
        console.log('>>>>>inside destroy');
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }

}
