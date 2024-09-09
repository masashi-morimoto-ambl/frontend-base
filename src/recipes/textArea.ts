import { cva } from '~/styled-system/css'
import { textInputCommonStyle } from './textField'

export const textAreaRecipe = cva({
  variants: {
    sizeSet: {
      default: {
        ...textInputCommonStyle,
        '& .mantine-focus-auto': {
          color: 'textPrimary',
          fontSize: '11px',
          padding: '21px 16px 14px 0px',
        },
        '& textarea': {
          color: 'textPrimary',
          width: 'textArea.default.width',
          height: 'textArea.default.height',
          border: '1px solid {colors.basePale}',
          backgroundColor: 'baseBright',
          padding: '14px 16px',
          borderRadius: '6px',
          fontSize: 'jp.medium',
          _placeholder: {
            color: 'textPale',
          },
          _focus: {
            borderColor: 'themePrimary',
          },
        },
        '& textarea[disabled]': {
          color: 'textPale',
          backgroundColor: 'baseBright',
        },
        '& .mantine-Input-wrapper': {
          width: 'textArea.default.width',
          height: 'textArea.default.height',
          order: 2,
        },
        "& .mantine-Input-wrapper[data-error='true'] textarea": {
          backgroundColor: 'baseAttentionPale',
          borderColor: 'baseError',
        },
      },
    },
  },
})
