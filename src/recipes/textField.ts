import { cva } from '~/styled-system/css'

// 以下のcssはtextField共通
export const textInputCommonStyle = {
  '&.mantine-InputWrapper-root': {
    display: 'flex',
    flexDirection: 'column',
  },
  '& .mantine-InputWrapper-label': {
    marginBottom: '8px',
    fontSize: 'jp.xSmall',
    color: 'textPrimary',
    order: 1,
  },
  '& .mantine-Input-wrapper': {
    width: 'textBox.default.width',
    height: 'textBox.default.height',
    order: 2,
  },
  '& .mantine-InputWrapper-description': {
    order: 3,
    fontSize: 'jp.xSmall',
    marginTop: 8,
  },
  '& input': {
    color: 'textPrimary',
    backgroundColor: 'baseBright',
    width: '100%',
    height: '100%',
    border: '1px solid {colors.basePale}',
    fontSize: 'jp.medium',
    padding: '14px 16px',
    borderRadius: '6px',
    _placeholder: {
      color: 'textPale',
    },
    _focus: {
      borderColor: 'themePrimary',
    },
  },
  '& input[disabled]': {
    color: 'textPale',
    backgroundColor: 'baseBright',
  },
  "& .mantine-Input-wrapper[data-error='true'] input": {
    backgroundColor: 'baseAttentionPale',
    borderColor: 'baseError',
  },
  '& .mantine-InputWrapper-error': {
    marginTop: '8px',
    color: 'textError',
    fontSize: 'jp.xSmall',
    order: 4,
  },
}

export const textFieldRecipe = cva({
  variants: {
    sizeSet: {
      default: textInputCommonStyle,
    },
  },
})
