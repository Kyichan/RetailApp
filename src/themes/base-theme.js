import { color, typography, transparency } from 'themes/design-tokens'

const NOT_ALLOWED = 'not-allowed'

export const baseTheme = {
  site: {
    color: { ...color },
    transparency: { ...transparency },
    posTypoH1: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s96,
      'line-height': typography.lineHeight.l144,
      'letter-spacing': '-0.5px'
    },
    posTypoH2: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s60,
      'line-height': typography.lineHeight.l72,
      'letter-spacing': '-0.5px'
    },
    posTypoH3: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s48,
      'line-height': typography.lineHeight.l64
      // 'letter-spacing': '' // not defined in design system
    },
    posTypoH4: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s32,
      'line-height': typography.lineHeight.l44,
      'letter-spacing': '0.25px'
    },
    posTypoH5: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s20,
      'line-height': typography.lineHeight.l32,
      'letter-spacing': '0.25px'
    },
    posTypoH6: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s20,
      'line-height': typography.lineHeight.l32
      // 'letter-spacing': '' // not defined in design system
    },
    posTypoOverline: {
      'font-style': 'normal',
      'font-weight': typography.weight.bold,
      'font-size': typography.size.s16,
      'line-height': typography.lineHeight.l24,
      'letter-spacing': '1px'
    },
    posTypoSubtitle1: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s16,
      'line-height': typography.lineHeight.l24,
      'letter-spacing': '0.5px'
    },
    posTypoMonospaceSubtitle1: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s16,
      'line-height': typography.lineHeight.l24,
      'letter-spacing': '0.5px',
      'font-feature-settings': `"tnum" on, "lnum" on`
    },
    posTypoSubtitle2: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s14,
      'line-height': typography.lineHeight.l20,
      'letter-spacing': '0.25px'
    },
    posTypoMonospaceSubtitle2: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s14,
      'line-height': typography.lineHeight.l20,
      'font-feature-settings': `"tnum" on, "lnum" on`
    },
    posTypoBody1: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s16,
      'line-height': typography.lineHeight.l24
      // 'letter-spacing': '' // not defined in design system
    },
    posTypoBody2: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s14,
      'line-height': typography.lineHeight.l20
      // 'letter-spacing': '' // not defined in design system
    },
    posTypoMonospaceBody2: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s14,
      'line-height': typography.lineHeight.l20,
      'font-feature-settings': `"tnum" on, "lnum" on`
      // 'letter-spacing': '' // not defined in design system
    },
    posTypoCaption: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s12,
      'line-height': typography.lineHeight.l20,
      'letter-spacing': '0.6px'
    },
    posTypoButtonL: {
      'font-style': 'normal',
      'font-weight': typography.weight.bold,
      'font-size': typography.size.s22,
      'line-height': typography.lineHeight.l28,
      'letter-spacing': '1px'
    },
    posTypoButtonS: {
      'font-style': 'normal',
      'font-weight': typography.weight.bold,
      'font-size': typography.size.s16,
      'line-height': typography.lineHeight.l24,
      'letter-spacing': '0.75px'
    },
    typoT11: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s11,
      'line-height': typography.lineHeight.l13
    },
    typoT12: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s12,
      'line-height': typography.lineHeight.l15
    },
    typoT14: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s14,
      'line-height': typography.lineHeight.l17
    },
    typoT16: {
      'font-style': 'normal',
      'font-weight': typography.weight.normal,
      'font-size': typography.size.s16,
      'line-height': typography.lineHeight.l19
    },
    typoT18: {
      'font-style': 'normal',
      'font-weight': typography.weight.medium,
      'font-size': typography.size.s18,
      'line-height': typography.lineHeight.l22
    },
    typoT22: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s22,
      'line-height': typography.lineHeight.l27
    },
    typoT28: {
      'font-style': 'normal',
      'font-weight': typography.weight.bold,
      'font-size': typography.size.s28,
      'line-height': typography.lineHeight.l34
    },
    typoT36: {
      'font-style': 'normal',
      'font-weight': typography.weight.medium,
      'font-size': typography.size.s36,
      'line-height': typography.lineHeight.l44
    },
    typoT46: {
      'font-style': 'normal',
      'font-weight': typography.weight.bold,
      'font-size': typography.size.s46,
      'line-height': typography.lineHeight.l56
    },
    typoT58: {
      'font-style': 'normal',
      'font-weight': typography.weight.bold,
      'font-size': typography.size.s58,
      'line-height': typography.lineHeight.l70
    },
    typoT64: {
      'font-style': 'normal',
      'font-weight': typography.weight.medium,
      'font-size': typography.size.s64,
      'line-height': typography.lineHeight.l77
    },
    typoT72: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s72,
      'line-height': typography.lineHeight.l87
    },
    typoT82: {
      'font-style': 'normal',
      'font-weight': typography.weight.semiBold,
      'font-size': typography.size.s82,
      'line-height': typography.lineHeight.l99
    },
    typoT92: {
      'font-style': 'normal',
      'font-weight': typography.weight.bold,
      'font-size': typography.size.s92,
      'line-height': typography.lineHeight.l111
    }
  },
  header: {
    backgroundColor: color.mono.c000
  },
  body: {
    color: color.mono.c1000,
    backgroundColor: color.mono.c100
  },
  footer: {
    backgroundColor: color.mono.c000
  },
  heading: {
    lineSpacing: '1em'
  },
  button: {
    primary: {
      disabled: {
        color: color.mono.c100,
        background: color.mono.c500,
        cursor: NOT_ALLOWED
      },
      default: {
        color: color.primary.c100,
        background: color.primary.c400,
        borderRadius: '4px',
        cursor: 'pointer',
        minHeight: '44px'
      },
      hover: {
        color: color.primary.c200,
        background: color.primary.c600
      },
      active: {
        color: color.primary.c300,
        background: color.primary.c700
      }
    },
    secondary: {
      disabled: {
        color: color.mono.c500,
        border: `1px solid ${color.mono.c500}`,
        background: color.mono.c100,
        cursor: NOT_ALLOWED
      },
      default: {
        color: color.primary.c400,
        border: `1px solid ${color.primary.c400}`,
        background: color.mono.c000,
        borderRadius: '4px',
        cursor: 'pointer',
        minHeight: '44px'
      },
      hover: {
        color: color.primary.c500,
        border: `1px solid ${color.primary.c400}`,
        background: color.primary.c100
      },
      active: {
        color: color.primary.c600,
        border: `1px solid ${color.primary.c500}`,
        background: color.primary.c200
      }
    },
    tertiary: {
      disabled: {
        color: color.mono.c500,
        border: `unset`,
        background: 'unset',
        cursor: NOT_ALLOWED
      },
      default: {
        color: color.mono.c800,
        border: `unset`,
        background: 'unset',
        borderRadius: 'unset',
        cursor: 'pointer',
        minHeight: '44px'
      },
      hover: {
        color: color.mono.c900,
        border: `unset`,
        borderRadius: '4px',
        background: color.mono.c100
      },
      active: {
        color: color.mono.c1000,
        border: `unset`,
        borderRadius: '4px',
        background: color.mono.c300
      }
    },
    success: {
      disabled: {
        color: color.mono.c100,
        background: color.mono.c500,
        cursor: NOT_ALLOWED
      },
      default: {
        color: color.success.c100,
        border: `unset`,
        background: color.success.c400,
        borderRadius: '4px',
        cursor: 'pointer',
        minHeight: '44px'
      },
      hover: {
        color: color.success.c100,
        background: color.success.c500
      },
      active: {
        color: color.success.c300,
        background: color.success.c600
      }
    },
    danger: {
      disabled: {
        color: color.mono.c500,
        background: color.mono.c100,
        cursor: NOT_ALLOWED
      },
      default: {
        color: color.danger.c400,
        border: `1px solid ${color.danger.c400}`,
        background: color.mono.c000,
        borderRadius: '4px',
        cursor: 'pointer',
        minHeight: '44px'
      },
      hover: {
        color: color.danger.c400,
        background: color.danger.c100
      },
      active: {
        color: color.danger.c500,
        border: `1px solid ${color.danger.c500}`,
        background: color.danger.c200
      }
    },
    borderRadius: '8px'
  },
  nav: {
    backgroundColor: color.mono.c000,
    menuToggleSize: {
      width: typography.size.s42,
      height: typography.size.s42
    }
  },
  link: {
    default: color.primary.c400,
    hover: color.primary.c500,
    visited: color.primary.c600
  },
  table: {
    backgroundColor: color.primary.c300
  },
  fillBlock: {
    backgroundColor: color.primary.c200,
    borderColor: color.mono.c000
  }
}
