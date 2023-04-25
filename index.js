export default function mediaQueries (
  prefix = 'min',
  breakpoints = 'md',
) {

  const screens = {
    sm: 576,
    md: 768,
    lg: 992,
    lg1: 1024,
    xl: 1200,
    xxl: 1400
  }

  let bpCustom = null;

  if (!Object.keys(screens).includes(breakpoints) && typeof breakpoints === 'number') {
    bpCustom = breakpoints;
  } 
 
  if (prefix === 'min') {
    return `@media (min-width: ${screens[breakpoints] || bpCustom}px)`
  }

  if (prefix === 'max') {
    return `@media (max-width: ${( screens[breakpoints] || bpCustom ) - Number(0.02).toFixed(2)}px)`
  }
}


// mediaQueries() // @media (min-width: 768px) 
// mediaQueries('max', 471) // @media (max-width: 470.98px)
// mediaQueries('max', 'md') // @media (max-width: 767.98px)
// mediaQueries('max', 'lg') // @media (max-width: 991.98px)
// mediaQueries('min', 'lg')  // @media (min-width: 992px)
// mediaQueries('min', 804) // @media (min-width: 804px)