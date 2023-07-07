
import { Wrapper } from '@/layout'
import { SecurityLog } from '@/logs'
import { SpComX } from '@/service-provider-con/sp-comX'
import { SpEmptyList } from '@/service-provider-con'
import { ArrowDown2 } from 'iconsax-react'
import React from 'react'

function ServiceProviderCon() {
  return (
    <Wrapper text="Service Provider">
      <SpEmptyList/>

       {/* <SpComX/> */}
    </Wrapper>
  )
}

export default ServiceProviderCon