import { cva } from '~/styled-system/css'

export const buttonRecipe = cva({
  base: {
    borderRadius: 6,
    _disabled: {
      color: 'textBright',
      backgroundColor: 'basePale',
      borderColor: 'basePale',
      _hover: {
        color: 'textBright',
        backgroundColor: 'basePale',
        borderColor: 'basePale',
      },
    },
    '&.mantine-Button-root span': {
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-all',
      textAlign: 'left',
    },
    '& .mantine-Button-inner': {
      gap: 12,
    },
    '& .mantine-Button-label': {
      lineHeight: 1.5,
      fontWeight: 300,
    },
  },
  variants: {
    sizeSet: {
      small: {
        padding: '10px 16px',
        minWidth: 64,
        width: 'button.small.width',
        height: 'button.small.height',
        '& .mantine-Button-label': {
          fontSize: 'jp.small',
        },
      },
      medium: {
        padding: '13px 16px',
        width: 'button.medium.width',
        height: 'auto',
        minHeight: 'button.medium.height',
        '& .mantine-Button-label': {
          fontSize: 'jp.medium',
        },
      },
    },
    colorSet: {
      primary_set: {
        backgroundColor: 'themePrimary',
        color: 'textBright',
        border: `1px solid`,
        borderColor: 'themePrimary',
        '&:hover': {
          backgroundColor: 'themePrimaryPale',
          borderColor: 'themePrimaryPale',
        },
      },
      secondary_set: {
        backgroundColor: 'baseBright',
        color: 'textThemePrimary',
        border: `1px solid`,
        borderColor: 'baseHairlineDark',
        '&:hover': {
          backgroundColor: 'baseSelected',
        },
      },
      tertiary_set: {
        color: 'textThemePrimary',
        border: `1px solid`,
        borderColor: 'transparent',
        '&:hover': {
          color: 'textThemePrimary/65',
        },
        _disabled: {
          color: 'textPale',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          _hover: {
            color: 'textPale',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          },
        },
      },
      disabled_set: {
        color: 'textBright',
        backgroundColor: 'basePale',
      },
      negate_set: {
        color: 'textAttention',
        backgroundColor: 'baseBright',
        border: `1px solid`,
        borderColor: 'baseAttention',
      },
    },
  },
})
