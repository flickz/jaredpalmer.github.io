const VerticalRhythm = require('compass-vertical-rhythm');

const { rhythm } = VerticalRhythm({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
});

const bold = 800;

const color = {
  dark: '#1B2125',
  white: '#fff',
  black: '#000',
  blue: '#80B9FE',
  red: '#CC0000',
  yellow: '#F8DC57',
  green: '#1CF5BA',
  purple: '#5E21D9',
  grayDarker: '#252527',
  gray: '#5F656D',
  grayLighter: '#8C95A1',
  grayLightest: '#DDE5E8',
  offWhiteLightest: '#F7FBFB',
  offWhiteLighter: '#EFF7F8',
  offWhite: '#EFEFEF',
  twitter: '#1da1f2',
  github: '#000',
  instagram: '#ed4956',
  facebook: '#4267b2',
  linkedin: '#0073b1',
  dribbble: '#c142a0',
};

const media = {
  small: '@media (min-width: 500px)',
  medium: '@media (min-width: 800px)',
  large: '@media (min-width: 1200px)',
};

export const theme = {
  rhythm,
  media,
  color,
  bold,
  wrapperWidth: 1000,
  sharedStyles: {
    markdown: {
      position: 'relative',
      zIndex: 300,
      maxWidth: 700,
      width: '100%',
      margin: '0 auto',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      background: color.white,
      paddingBottom: 80,
      '& .dropcap': {
        float: 'left',
        fontSize: 53,
        lineHeight: 0.8,
        position: 'relative',
        top: ' 9px',
        fontWeight: bold,
        paddingRight: 8,
        background: color.white,
      },
      '& ::-moz-selection': {
        background: color.purple,
        color: color.white,
      },

      '& ::selection': {
        background: color.purple,
        color: color.white,
      },
      '& p a, & li a, & li code a': {
        fontWeight: 'inherit',
        color: color.purple,
        textDecoration: 'underline',
      },
      '& h1, & h2, & h3, & h4': {
        lineHeight: '1.2',
        fontWeight: bold,
        marginTop: rhythm(2),
      },
      '& h1, & h2, & h3, & h4, & p, & ul, & ol ': {
        marginBottom: rhythm(1),
      },
      '& li h4, & li h5, & li h6': {
        marginBottom: 0,
      },
      '& ul li': {
        margin: '0 0 10px 16px',
        '&:before': {
          float: 'left',
          marginLeft: -16,
          color: color.grayLighter,
          content: '-',
        },
      },
      '& strong': {
        fontWeight: bold,
      },
      '& p': {
        lineHeight: '1.5',
        fontWeight: 400,
        fontSize: rhythm(0.8),
        marginBottom: rhythm(1.25),
      },
      '& .gatsby-highlight  pre > code': {
        fontSize: 13,
        lineHeight: 1.4,
        // [media.large]: {
        //   marginLeft: '-1.75rem',
        //   marginRight: '-1.75rem',
        // },
      },

      '& h1': {
        [media.large]: {
          fontSize: rhythm(2),
          letterSpacing: '-1px',
        },
      },
      '& pre.editor.editor-colors': {
        [media.large]: {
          marginLeft: '-1.5rem',
          marginRight: '-1.5rem',
        },
      },
      '& .comment.js': {
        color: color.grayLighter,
      },
      '& .keyword.js': {
        color: color.grayDarker,
        fontWeight: 'bold',
      },
      // export default
      '& .variable.default.js': {
        color: color.grayDarker,
        fontWeight: 'bold',
      },
      // class
      '& .storage.type.js': {
        color: color.grayDarker,
        fontWeight: 'bold',
      },
      // extends
      '& .storage.modifier.js': {
        color: color.grayDarker,
        fontWeight: 'bold',
      },
      // React.
      // '& .entity.other.inherited-class.js': {
      //   color: color.gray,
      //   fontWeight: 'bold',
      // },
      // props
      '& .entity.other.attribute-name.js': {
        color: color.grayDarker,
        fontStyle: 'italic',
      },
      '& .entity.name.function.js': {
        color: color.gray,
      },
      '& .punctuation.definition.brace.curly.js': {
        color: color.gray,
      },
      '& .punctuation.definition.string.js': {
        color: color.gray,
      },
      '& .meta.brace.curly.js': {
        color: color.gray,
      },
      '& .string.quoted.double.js': {
        color: color.gray,
      },

      '& .punctuation.definition.tag.js': {
        color: color.gray,
      },
      '& .keyword.operator.spread.js': {
        color: color.gray,
      },
    },
  },
};
