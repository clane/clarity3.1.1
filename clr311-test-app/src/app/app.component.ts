import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { ClrStackBlock } from '@clr/angular';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'clr311-test-app';

  //begin modal 
  public basic = false;
  //end modal

  //begin stack view
  @ViewChild('lazyBlock', { static: true })
  lazyBlock: ClrStackBlock;

  //Lazy loading demo
  children: any[] = [];

  fetchChildren(): void {
    if (this.children.length > 0) {
      return;
    }
    setTimeout(() => {
      this.children = [
        { title: 'Sub-label 1', content: 'Sub-content 1' },
        { title: 'Sub-label 2', content: 'Sub-content 2' },
        { title: 'Sub-label 3', content: 'Sub-content 3' },
      ];
    }, 2000);
  }

  
   
    resetChildren(): void {
      this.lazyBlock.expanded = false;
      this.children = [];
    }

    //Modal edit demo
    blocks: any[] = [
      { title: 'Label 1', content: 'Content 1' },
      {
        title: 'Label 2',
        content: 'Content 2',
        children: [
          { title: 'Sub-label 1', content: 'Sub-content 1' },
          { title: 'Sub-label 2', content: 'Sub-content 2' },
          { title: 'Sub-label 3', content: 'Sub-content 3' },
        ],
      },
      { title: 'Label 3', content: 'Content 3' },
    ];

    editModal = false;
     //end stack view

  //overflow tabs
  inOverflow = true;
  
  //Begin Timeline 
  props = [
    {
      name: '[clrLayout]',
      values: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
      description: "Define if the timeline shall be 'horizontal' or 'vertical'",
    },
  ];

  stepProps = [
    {
      name: '[clrState]',
      values: 'ClrTimelineStepState',
      defaultValue: 'NOT_STARTED',
      description: 'Define the symbol (icon or spinner) to use to decorate the step',
    },
  ];
  //End Timeline 

  //Begin Vertical Nav

  

  //End Vertical Nav


  ngOnInit() {} 

  ngOnDestroy() {}
  
  
 

}
