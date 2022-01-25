import getUsers from "app/users/queries/getUsers"
import { useQuery } from "blitz"

export const useUsers = () => {
  const [users] = useQuery(getUsers, null)
  console.log({ users })
  return users
}
