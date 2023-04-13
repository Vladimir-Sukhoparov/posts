import type { ReactElement } from 'react'
import Layout from '../components/layout'

import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <h1 >This is test NextJS app create</h1>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
     {page}
    </>
  )
}

export default Page