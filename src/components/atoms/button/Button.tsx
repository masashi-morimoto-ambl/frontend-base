import { buttonRecipe } from '@/recipes/button'
import { Button as MButton, ButtonProps, createPolymorphicComponent } from '@mantine/core'
import React, { forwardRef } from 'react'
import { RecipeVariant } from '~/styled-system/types'

interface Props extends ButtonProps {
  children: React.ReactNode
  colorSet?: RecipeVariant<typeof buttonRecipe>['colorSet']
  sizeSet?: RecipeVariant<typeof buttonRecipe>['sizeSet']
}

export const Button = createPolymorphicComponent<'button', Props>(
  forwardRef<HTMLButtonElement, Props>(({ children, colorSet = 'primary_set', sizeSet = 'medium', ...others }, ref) => (
    <MButton className={buttonRecipe({ sizeSet, colorSet })} component="button" {...others} ref={ref}>
      {children}
    </MButton>
  )),
)
