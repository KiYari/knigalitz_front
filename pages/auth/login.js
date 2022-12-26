import Authorization from '../../components/auth/Authorization'
import Error from '../../components/auth/error/Error'
import Layout from '../../layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Error></Error>
      <Authorization/>
    </Layout>
  )
}
