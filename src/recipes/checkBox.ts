import { cva } from '~/styled-system/css'

export const checkBoxRecipe = cva({
  variants: {
    sizeSet: {
      default: {
        '& .mantine-Checkbox-body': {
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        },
        '& .mantine-Checkbox-inner': {
          width: 'checkBox.default.width',
          height: 'checkBox.default.height',
          display: 'grid',
        },
        '& .mantine-Checkbox-input': {
          border: '1px solid {colors.baseQuaternary}',
          width: 'checkBox.default.width',
          height: 'checkBox.default.height',
          borderRadius: 6,
          _disabled: {
            backgroundColor: '{colors.baseHairline}',
            border: '1px solid {colors.basePale}',
          },
        },
        '& .mantine-Checkbox-inner svg': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '50%',
          opacity: 1,
        },
        '& .mantine-Checkbox-input:checked': {
          backgroundColor: '{colors.themePrimary}',
          border: '1px solid {colors.themePrimary}',
        },
      },
    },
  },
})
