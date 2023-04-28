# styled-components-media-queries

little utils function that can helps us to write more clean media queries inside styled-components.

copy index.js and use it as you want.

```javascript
  export default function mediaQueries (prefix = 'min', breakpoints = 'md') {

    // simple object where we can put various screen viewport width
    const screens = {
      sm: 576,
      md: 768,
      lg: 992,
      lg1: 1024,
      xl: 1200,
      xxl: 1400
    }

    // custom breakpoints, default is null
    let bpCustom = null;

    if (!Object.keys(screens).includes(breakpoints) && typeof breakpoints === 'number') {
      bpCustom = breakpoints;
    } 
    
    // @media with min-width
    if (prefix === 'min') {
      return `@media (min-width: ${screens[breakpoints] || bpCustom}px)`
    }

    // @media with max-width
    if (prefix === 'max') {
      return `@media (max-width: ${( screens[breakpoints] || bpCustom ) - Number(0.02).toFixed(2)}px)`
    }
  }
```

## How to use

- example without any argument
- it will by default output with `@media (min-width: 768px)`

```javascript
  import styled from 'styled-components';
  import mediaQueries from './your-path';

  const Page = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;

    ${mediaQueries()} {
      max-width: 1440px;
    }
  `
```

- few other examples
- `mediaQueries('max', 'md') // @media (max-width: 767.98px)` 
- `mediaQueries('max', 471) // @media (max-width: 470.98px)`
- `mediaQueries('max', 'lg') // @media (max-width: 991.98px)`
- `mediaQueries('min', 'lg')  // @media (min-width: 992px)`
- `mediaQueries('min', 804) // @media (min-width: 804px)`

```javascript
  const Card = styled.div`
    max-width: 470px;
    border-radius: 8px;
    background-color: white;

    ${mediaQueries('max', 'md')} {
      max-width: calc(100% - 32px);
      border-radius: 4px;
    }

    ${mediaQueries('max', 471)} {
      background-color: yellow;
    }
  `
```