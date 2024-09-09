import { cva } from '~/styled-system/css'
import { textInputCommonStyle } from './textField'

export const selectWrapperRecipe = cva({
  base: {
    color: 'textPrimary',
  },
  variants: {
    sizeSet: {
      default: {
        '& .mantine-Select-dropdown': {
          width: '100%',
          borderRadius: '6px',
          padding: '8px 0px',
          filter: 'drop-shadow(0px 2px 2px #0000003D) drop-shadow(0px 0px 2px #0000001F)',
        },
        '& .mantine-Select-option': {
          width: '100%',
          height: '44px',
          padding: '8px 16px',
          gap: '12px',
        },
        '& .mantine-Select-option:hover:where(:not([data-combobox-selected],[data-combobox-disabled]))': {
          backgroundColor: 'baseSelected',
        },
        '& input[data-expanded="true"]+ .mantine-Select-section>div': {
          rotate: '180deg',
        },
        '& div[left-icon="true"]': {
          marginLeft: 20,
          cursor: 'pointer',
        },
      },
    },
  },
})
export const selectRecipe = cva({
  variants: {
    sizeSet: {
      default: {
        ...textInputCommonStyle,
        '& .mantine-Select-wrapper': {
          width: '100%',
          height: '50px',
        },
        '& .mantine-Select-input': {
          border: '1px solid {colors.textPale}',
          borderRadius: '6px',
          padding: '14px 40px 14px 16px',
          width: '100%',
          height: '50px',
          backgroundColor: 'baseBright',
        },
        '& .mantine-Select-section': {
          right: 8,
        },
        '& .mantine-Select-label': {
          fontSize: 12,
          color: 'textPrimary',
        },
        '& input[disabled]': {
          color: '{colors.textPale}',
          backgroundColor: 'baseBright',
          padding: '14px 16px',
        },
        "& div[data-with-left-section='true'] .mantine-Select-input": {
          padding: '14px 40px 14px 52px',
        },
      },
    },
  },
})
