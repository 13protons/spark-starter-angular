import { Component } from '@angular/core';

@Component({
  selector: 'sprk-accordion-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Primary Accordion</h2>
      <sprk-accordion>
        <sprk-accordion-item
          idString="accordion-item-1"
          analyticsString="object.action.event"
          additionalHeadingClasses="sprk-b-TypeDisplaySeven"
          isOpen="true"
          title="This is a longer title than all the other accordion titles here. But, it works!"
        >
          <p>
            This is some content This is some content. This is some content.
            This is some content This is some content. This is some content.
          </p>
        </sprk-accordion-item>
        <sprk-accordion-item
          isOpen="true"
          additionalHeadingClasses="sprk-b-TypeDisplaySeven"
          title="This is another title"
        >
          <p>This is some more content.</p>
        </sprk-accordion-item>
        <sprk-accordion-item
          additionalHeadingClasses="sprk-b-TypeDisplaySeven"
          title="This is another title"
        >
          <p>This is some more content.</p>
        </sprk-accordion-item>
      </sprk-accordion>
    </div>
  `,
  styles: ['']
})
export class AccordionDocsComponent {
  constructor() {}
}