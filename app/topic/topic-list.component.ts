import { Component, OnInit } from '@angular/core'

import { ITopic } from './topic'

@Component({
    selector: 'topic-list',
    templateUrl: "app/topic/topic-list.component.html"
})
export class TopicListComponent implements OnInit {
    title: string = "Topic List";
    listFilter: string;
    topics: ITopic[] = [
    {
        id: 1,
        title: "bilinear mapping",
        subject: "linear algebra",
        author: "Franklin Richards",
        startdate: new Date(2016, 9, 4),
        lastupdate: new Date(2016, 9, 4)
    },
    {
        id: 2,
        title: "dual vector space",
        subject: "linear algebra",
        author: "Richard M. Nexon",
        startdate: new Date(2016, 8, 31),
        lastupdate: new Date(2016, 9, 4)
    },
    {
        id: 4,
        title: "finite dimensional tensors",
        subject: "linear algebra",
        author: "Winston",
        startdate: new Date(2016, 5, 1),
        lastupdate: new Date(2016, 9, 4)
    }];

    constructor() {
        console.log("hi");
    }

    ngOnInit() {}
} 