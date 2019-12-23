import theme from 'styled-theming';

export const layer0 = theme('mode', {
  light: '#ebebeb',
  dark: '#0f0f0f'
});

export const layer1 = theme('mode', {
  light: '#f6f6f6',
  dark: '#1a1a1a'
});

export const layer2 = theme('mode', {
  light: '#ffffff',
  dark: '#1a1a1a'
});

export const foreground = theme('mode', {
  light: '#0f0f0f',
  dark: '#ffffff'
});

export const kindaLightForeground = theme('mode', {
  light: '#404040',
  dark: '#cccccc'
})

export const lightForeground = theme('mode', {
  light: '#737373',
  dark: '#adadad'
})

export const evenMoreTransparent = theme('mode', {
  light: 'rgba(0,0,0,0.1)',
  dark: 'rgba(255,255,255,0.1)'
})

export const moreTransparent = theme('mode', {
  light: 'rgba(0,0,0,0.05)',
  dark: 'rgba(0,0,0,0.15)'
})

export const transparent = theme('mode', {
  light: 'rgba(0,0,0,0.1)',
  dark: 'rgba(255,255,255,0.1)'
})

export const lessTransparent = theme('mode', {
  light: 'rgba(0,0,0,0.15)',
  dark: 'rgba(0,0,0,0.25)'
})

export const evenLessTransparent = theme('mode', {
  light: 'rgba(0,0,0,0.25)',
  dark: 'rgba(0,0,0,0.40)'
})

export const evenTransparent = theme('mode', {
  light: 'rgba(0,0,0,0.5)',
  dark: 'rgba(255,255,255,0.5)'
})

export const accent = theme('mode', {
  light: "#d9ae6d",
  dark: "#ead2ae"
})