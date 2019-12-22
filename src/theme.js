// const lightTheme = {
//     layer0: "#f9f9f9",
//     layer1: "#ffffff",
//     foreground0: "#000000",
//     foreground1: "#737373",
//     foreground2: "#adadad",
//     accent: "#d9ae6d",
// }

// const darkTheme = {
//     layer0: "#000000",
//     layer1: "#1a1a1a",
//     foreground0: "ffffff",
//     foreground1: "#737373",
//     foreground2: "#adadad",
//     accent: "#ead2ae",
// }

import style from 'styled-theming';

export const layer0 = style('mode', {
  light: '#ebebeb',
  dark: '#000000'
});

export const layer1 = style('mode', {
  light: '#f6f6f6',
  dark: '#0f0f0f'
});

export const layer2 = style('mode', {
  light: '#ffffff',
  dark: '#1a1a1a'
});

export const foreground = style('mode', {
  light: '#000000',
  dark: '#ffffff'
});

export const kindaLightForeground = style('mode', {
  light: '#404040',
  dark: '#cccccc'
})

export const lightForeground = style('mode', {
  light: '#737373',
  dark: '#adadad'
})

export const moreTransparent = style('mode', {
  light: 'rgba(0,0,0,0.05)',
  dark: 'rgba(0,0,0,0.15)'
})

export const transparent = style('mode', {
  light: 'rgba(0,0,0,0.1)',
  dark: 'rgba(255,255,255,0.1)'
})

export const lessTransparent = style('mode', {
  light: 'rgba(0,0,0,0.15)',
  dark: 'rgba(0,0,0,0.25)'
})

export const evenLessTransparent = style('mode', {
  light: 'rgba(0,0,0,0.25)',
  dark: 'rgba(0,0,0,0.40)'
})

export const evenTransparent = style('mode', {
  light: 'rgba(0,0,0,0.5)',
  dark: 'rgba(255,255,255,0.5)'
})

export const accent = style('mode', {
  light: "#d9ae6d",
  dark: "#ead2ae"
})