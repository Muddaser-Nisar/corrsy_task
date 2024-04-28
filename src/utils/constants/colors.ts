type Color =
  | 'placeHolder'
  | 'borderColor'
  | 'lightBlack'
  | 'black'
  | 'white'
  | 'orange'
  | 'lightBorder'
  | 'blurColor'
  | 'redColor'
  | 'lockedColor'
  | 'greenColor'
  | 'buttonBorder'
  | 'dimColor'
  | 'dimText'
  | 'activeColor'
  | 'inActiveColor';
// Add more color names...

export const colors: Record<Color, string> = {
  placeHolder: '#999999',
  borderColor: 'rgba(57, 58, 58, 0.3)',
  lightBlack: '#393A3A',
  black: '#000000',
  white: '#FFFFFF',
  orange: '#FF642F',
  lightBorder: '#6C6C6C',
  blurColor: '#FFECE6',
  redColor: '#E21B1B',
  lockedColor: '#7F7F7F',
  greenColor: '#4BAE4F',
  buttonBorder: '#DFE3E8',
  dimColor: '#D9D9D9',
  dimText: '#C4CDD5',
  activeColor: '#0EAB8C',
  inActiveColor: '#A2A2A2',
  // Add more colors as needed...
};
