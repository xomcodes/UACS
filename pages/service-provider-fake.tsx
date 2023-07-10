
import { Wrapper } from '@/layout'
import { SecurityLog } from '@/logs'
import { SpEmptyList, SpList1, SpOverview, SpOverviewEmpty } from '@/service-provider'
import React from 'react'

function ServiceProvider() {
  return (
    <Wrapper text="Service Provider">
      <SpEmptyList/>
       {/* <SpList1/> */}
        <SpOverviewEmpty/>
       {/* <SpOverview/> */}
    </Wrapper>
  )
}

export default ServiceProvider