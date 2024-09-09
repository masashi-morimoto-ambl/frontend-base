import { cva } from '~/styled-system/css'

export const switchRecipe = cva({
  variants: {
    sizeSet: {
      default: {
        '& .mantine-Switch-body': {
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        },
        '& .mantine-Switch-track': {
          width: 'toggle.default.width',
          height: 'toggle.default.height',
          backgroundColor: 'baseHairline',
        },
        '& .mantine-Switch-thumb': {
          width: 17,
          height: 17,
        },
        '& .mantine-Switch-input:checked + .mantine-Switch-track': {
          backgroundColor: '{colors.themePrimary}',
        },
        '& .mantine-Switch-input:checked + .mantine-Switch-track > .mantine-Switch-thumb': {
          left: 'auto',
          right: 4,
        },
        '& .mantine-Switch-input:not(checked) + .mantine-Switch-track > .mantine-Switch-thumb': {
          left: 4,
        },
        '& .mantine-Switch-description': {
          fontSize: 'jp.xSmall',
          color: '{colors.textPrimary}',
        },
      },
    },
  },
})
