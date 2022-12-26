import Registration from '../../components/auth/registration/Registration'
import Error from '../../components/auth/error/Error'
import Layout from '../../layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Error></Error>
      <Registration/>
    </Layout>
  )
}
