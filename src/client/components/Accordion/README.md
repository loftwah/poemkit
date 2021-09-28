# @uixkit.react/components/Accordion

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Accordion)

## Version

=> 0.0.1

## API

### Accordion
```js
import { Accordion } from '@uixkit.react/components/Accordion/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `triggerType` | string \| `click` \| `mouseenter`  | click | One event type, such as `click` or `mouseenter` |
| `displayTheFirstItem` | boolean | false | Display the only first item of a list |



### Accordion Item
```js
import { AccordionItem } from '@uixkit.react/components/Accordion/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultActive` | boolean | false | Set an item to activate by default |
| `title` | string | - | Set a title for each item |



## Examples

```js
import React from 'react';
import { Accordion, AccordionItem } from '@uixkit.react/components/Accordion/index.tsx';

export default () => {
  return (
    <>

 

      <h3>Accordion 1</h3>
      <p>Show hidden divs on click.</p>
      {/* ================================================================== */}
      <Accordion triggerType="click" displayTheFirstItem={true}>
        <AccordionItem title={<>Item 1</>}>
          <h4>Usage:</h4>Click on an item to open.
        </AccordionItem>
        <AccordionItem title={<>Item 2</>}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </AccordionItem>
        <AccordionItem title={<>Item 3</>}>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac.</p>

            <p>People think focus means saying yes to the thing you&#8217;ve got to focus on. But that&#8217;s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I&#8217;m actually as proud of the things we haven&#8217;t done as the things I have done. Innovation is saying no to 1,000 things. <cite>Steve Jobs &#8211; Apple Worldwide Developers&#8217; Conference, 1997</cite></p>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac.</p>
        </AccordionItem>
        <AccordionItem title={<>Item 4</>}>
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </AccordionItem>
      </Accordion>


      <h3>Accordion 2</h3>
      <p>Show hidden divs on mouseover.</p>
      {/* ================================================================== */}
      <Accordion triggerType="mouseenter">
          <AccordionItem title={<>Item 1</>}>
            <h4>Usage:</h4>Click on an item to open.
          </AccordionItem>
          <AccordionItem title={<>Item 2</>}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </AccordionItem>
          <AccordionItem title={<>Item 3</>}>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac.</p>

              <p>People think focus means saying yes to the thing you&#8217;ve got to focus on. But that&#8217;s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I&#8217;m actually as proud of the things we haven&#8217;t done as the things I have done. Innovation is saying no to 1,000 things. <cite>Steve Jobs &#8211; Apple Worldwide Developers&#8217; Conference, 1997</cite></p>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac.</p>
          </AccordionItem>
          <AccordionItem title={<>Item 4</>}>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </AccordionItem>
        </Accordion>

    
    </>
  );
}

```