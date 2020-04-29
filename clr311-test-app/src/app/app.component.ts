import { Component, ViewChild } from '@angular/core';
import { ClrStackBlock } from '@clr/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clr311-test-app';

    //begin modal 
    public basic = false;
    //end modal

    //begin stack view
    @ViewChild('lazyBlock', { static: true })
    lazyBlock: ClrStackBlock;

    /*
     * Lazy loading demo
     */
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
  

 

}
