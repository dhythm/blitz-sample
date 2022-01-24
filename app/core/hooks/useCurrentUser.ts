import getCurrentUser from "app/users/queries/getCurrentUser"
import { useQuery } from "blitz"

export const useCurrentUser = () => {
  const [user] = useQuery(getCurrentUser, null)
  console.log({ user })
  return user
}
