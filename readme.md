### Title ->  Color Change

---

This program is written to change the background Color of the canvas every time you click the button.
First,I got the `div` element having id of `canvas` and `button` having id of `button`  using `getElementById` and then I created a function which generates a hex color code for example (#1B26C8). This function returns a string. After that I created a function which used as a second parameter in `addEventListener` method. It calls `getHexCode()` function and it uses the returned value to style the background of canvas. At last, I gave `addEventListener()` method to `btn` which uses `click` event.

### Topics Learned :
- Event Listener
- getElementById
- To generate hexCode

### Technologies Used :
- HTML
- CSS
- JavaScript