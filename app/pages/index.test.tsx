// import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import getCurrentUser from "app/users/queries/getCurrentUser"
import getUsers from "app/users/queries/getUsers"
import { render } from "test/utils"
import Home from "."

// jest.mock("app/core/hooks/useCurrentUser")
// const mockUseCurrentUser = useCurrentUser as jest.MockedFunction<typeof useCurrentUser>

jest.mock("app/users/queries/getCurrentUser", () => {
  const resolver = jest.fn() as any
  resolver._resolverType = "query"
  resolver._routePath = "app/users/queries/getCurrentUser"
  return resolver
})
const mockGetCurrentUser = getCurrentUser as jest.MockedFunction<typeof getCurrentUser>

jest.mock("app/users/queries/getUsers", () => {
  const resolver = jest.fn() as any
  resolver._resolverType = "query"
  resolver._routePath = "app/users/queries/getUsers"
  return resolver
})
const mockGetUsers = getUsers as jest.MockedFunction<typeof getUsers>

test("renders blitz documentation link", async () => {
  // This is an example of how to ensure a specific item is in the document
  // But it's disabled by default (by test.skip) so the test doesn't fail
  // when you remove the the default content from the page

  // This is an example on how to mock api hooks when testing
  // mockUseCurrentUser.mockReturnValue({
  //   id: 1,
  //   name: "User",
  //   email: "user@email.com",
  //   role: "user",
  // })

  mockGetCurrentUser.mockResolvedValue({
    id: 1,
    name: "User",
    email: "user@email.com",
    role: "user",
  })
  mockGetUsers.mockResolvedValue([
    {
      id: 1,
      name: "User",
      email: "user@email.com",
      role: "user",
    },
    {
      id: 2,
      name: "User2",
      email: "user2@email.com",
      role: "user2",
    },
  ])

  const { findByRole } = render(<Home />)

  const logoutButton = await findByRole("button", { name: "Logout" })

  expect(logoutButton).toBeInTheDocument()
})
