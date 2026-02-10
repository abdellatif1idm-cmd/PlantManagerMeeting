import Section from '@/components/layout/Section'
import React from 'react'
import PressLayout from './elements/PressLayout'

const Press = () => {
  return (
    <Section id='press' title='Accréditation Presse' withTexture={{enabled:true,className:"rotate-25"}}>
      <PressLayout/>
    </Section>
  )
}

export default Press
