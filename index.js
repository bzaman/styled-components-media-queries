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
