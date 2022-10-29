import getCurrentUser from "app/users/queries/getCurrentUser"
import { render, screen } from "test/utils"
import One from "./one"

jest.mock("app/users/queries/getCurrentUser", () => {
  const resolver = jest.fn() as any
  resolver._resolverType = "query"
  resolver._routePath = "app/users/queries/getCurrentUser"
  return resolver
})
const mockGetCurrentUser = getCurrentUser as jest.MockedFunction<typeof getCurrentUser>

beforeEach(() => {
  mockGetCurrentUser.mockResolvedValue({
    id: 1,
    name: "User",
    email: "user@email.com",
    role: "user",
  })
})

test("page is shown", async () => {
  const { unmount } = render(<One />)
  expect(screen.getByRole("heading", { name: "One" }))
})
