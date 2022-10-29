import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"
import { Suspense } from "react"

const Three: BlitzPage = () => {
  const currentUser = useCurrentUser()

  return (
    <Suspense fallback="Loading...">
      <div>
        <h1>Three</h1>
        <p>
          User id: <code>{currentUser?.id ?? ""}</code>
        </p>
      </div>
    </Suspense>
  )
}

Three.getLayout = (page) => <Layout title="Home">{page}</Layout>
export default Three
