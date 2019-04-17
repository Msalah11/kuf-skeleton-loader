import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'kuf-skeleton-loader',
    styles: [],
    templateUrl: './kuf-skeleton-loader.component.html',
    styleUrls: ['./kuf-skeleton-loader.component.scss'],
})
export class KufSkeletonLoaderComponent implements OnInit {
    @Input() width: any;
    @Input() height: any;
    @Input() radius: any;
    @Input() duration: any;
    @Input() background: any;
    @Input() circle = false;
    @Input() count =  1;

    styles: any = {};
    items: any = [];

    constructor() { }

    ngOnInit() {

        if (typeof this.radius !== 'undefined') {
            this.styles.borderRadius = '4px';
        }

        if (typeof this.width !== 'undefined' && this.width !== '') {
            this.styles.width = this.width;
        }

        if (typeof this.height !== 'undefined' && this.height !== '') {
            this.styles.height = this.height;
        }

        if (typeof this.duration !== 'undefined' && this.duration !== '') {
            this.styles.animationDuration = this.duration;
        }

        if (typeof this.background !== 'undefined' && this.background !== '') {
            this.styles.background = this.background;
        }

        this.items = new Array(this.count);
    }

}
