module.exports = {
  prefix: '',
  important: false,
  separator: '_',
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    colors: {
      currentColor: 'currentColor', transparent: 'transparent',
      black: '#000', white: '#fff',
      gray: {
        1: '#f7fafc', 2: '#edf2f7', 3: '#e2e8f0',
        4: '#cbd5e0', 5: '#a0aec0', 6: '#718096',
        7: '#4a5568', 8: '#2d3748', 9: '#1a202c',
      },
      blue: {
        1: '#ebf8ff', 2: '#bee3f8', 3: '#90cdf4',
        4: '#63b3ed', 5: '#4299e1', 6: '#3182ce',
        7: '#2b6cb0', 8: '#2c5282', 9: '#2a4365',
      },
    },
    spacing: {
      0: '0px', 1: '1px', 2: '2px', 3: '3px',
      4: '4px', 6: '6px', 8: '8px', 12: '12px',
      16: '16px', 20: '20px', 24: '24px', 32: '32px',
      40: '40px', 48: '48px', 60: '40px',
    },
    backgroundColor: theme => theme('colors'),
    borderColor: theme => theme('colors'),
    borderRadius: { '0': '0', '1': '1px', '2': '2px', full: '9999px' },
    borderWidth: { '0': '0', '1': '1px', '2': '2px' },
    boxShadow: {
      '1-light': '0px 1px 1px 0px rgba(0,0,0,0.08)',
      '1-dark': '0px 1px 1px 0px rgba(0,0,0,0.16)',
      4: '0px 1px 4px 0px rgba(0,0,0,0.16)',
      8: '0px 1px 8px 0px rgba(0,0,0,0.16)',
      12: '0px 4px 12px 0px rgba(0,0,0,0.2)',
      // inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      // outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    },
    cursor: { pointer: 'pointer' },
    flex: { 1: '1 1 0%', none: '0 0 auto' },
    fontSize: { 14: '14px', 16: '16px', 18: '18px' },
    fontWeight: { normal: '400', semibold: '600' },
    height: theme => ({ ...theme('spacing'), full: '100%', screen: '100vh' }),
    inset: { 0: '0px' },
    lineHeight: { 20: '20px', 24: '24px', 28: '28px', 32: '32px' },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    padding: theme => theme('spacing'),
    textColor: theme => theme('colors'),
    width: theme => ({
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.33%', '2/3': '66.67%',
      '1/4': '25%', '2/4': '50%', '3/4': '75%',
      '1/5': '20%', '2/5': '40%', '3/5': '60%', '4/5': '80%',
      full: '100%', screen: '100vw',
    }),
  },
  variants: {
    alignContent: [], alignItems: [], alignSelf: [], backgroundColor: ['hover', 'focus'],
    borderColor: [], borderRadius: [], borderWidth: [], boxShadow: [],
    cursor: [], display: [],
    flex: [], flexDirection: [], flexWrap: [], fontSize: [], fontWeight: [],
    height: [], inset: [], justifyContent: [], lineHeight: [], margin: [], overflow: [],
    padding: [], pointerEvents: [], position: [],
    textAlign: [], textColor: [], userSelect: [],
    visibility: [], whitespace: [], width: [], wordBreak: [],
  },
  corePlugins: {
    accessibility: false, appearance: false, alignContent: false, alignSelf: false,
    backgroundAttachment: false, backgroundPosition: false, backgroundRepeat: false,
    backgroundSize: false, borderCollapse: false, borderStyle: false,
    container: false, fill: false, flexGrow: false, flexShrink: false, float: false,
    fontFamily: false, fontSmoothing: false, fontStyle: false,
    letterSpacing: false, listStylePosition: false, listStyleType: false,
    maxHeight: false, maxWidth: false, minHeight: false, minWidth: false,
    objectFit: false, objectPosition: false, opacity: false, order: false, outline: false,
    placeholderColor: false, resize: false, stroke: false,
    tableLayout: false, textDecoration: false, textTransform: false, verticalAlign: false,
    zIndex: false,
  },
  plugins: [],
}
