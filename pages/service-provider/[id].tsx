import { Wrapper } from '@/layout'
import { SpOverviewEmpty } from '@/service-provider'
import React from 'react'
import { useRouter } from 'next/router'

function Provider() {
    const router = useRouter()
  return (
    <Wrapper text="ComX">

      <SpOverviewEmpty/>
   
  </Wrapper>
  )
}

export default Provider