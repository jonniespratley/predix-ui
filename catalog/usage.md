# usage
They are self-supporting, they will inject and only inject the style they need to display. They don't rely on any global style like `normalize.css`. You can use any of the components as demonstrated in our documentation.

Here is a quick example to get you started, it's all you need:

```code
import React from 'react';
import { render } from 'react-dom';
import Button from 'predix-ui/Button';

function App() {
  return (
    <Button>
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```
