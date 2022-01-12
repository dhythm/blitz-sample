import getCurrentUser from "app/rpc/user/queries/getCurrentUser"
import { useQuery } from "blitz"

export const useCurrentUser = () => {
  const [user] = useQuery(getCurrentUser, null)
  return user
}
