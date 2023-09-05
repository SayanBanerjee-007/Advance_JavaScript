# Event Delegation

Event delegation is a JavaScript programming technique that involves attaching a single event handler to a common ancestor element, instead of attaching individual event handlers to multiple child elements. The goal of event delegation is to optimize performance and reduce memory usage by minimizing the number of event handlers while still achieving the desired functionality.

The idea behind event delegation is that events on child elements can "bubble up" to their parent or ancestor elements in the DOM hierarchy. When an event occurs on a child element, it triggers the same event on its parent, then on the parent's parent, and so on, until it reaches the root of the document. During this process, the event object contains information about the original target of the event.

### Example

`index.html`

```html
<ul id="parentList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

`script..js`

```javascript
document.getElementById("parentList").addEventListener(
  "click",
  function (event) {
    if (event.target && event.target.nodeName === "LI") {
      console.log("Clicked on:", event.target.textContent);
    }
  },
  false
); // By default false, just a reminder.
```
