import getCurrentUser from "app/users/queries/getCurrentUser"
import { screen } from "test/utils"

jest.mock("app/users/queries/getCurrentUser")
const mockGetCurrentUser = getCurrentUser as jest.MockedFunction<typeof getCurrentUser>

test("renders blitz documentation link", async () => {
  // This is an example of how to ensure a specific item is in the document
  // But it's disabled by default (by test.skip) so the test doesn't fail
  // when you remove the the default content from the page

  // This is an example on how to mock api hooks when testing
  mockGetCurrentUser.mockResolvedValue({
    id: 1,
    name: "User",
    email: "user@email.com",
    role: "user",
  })

  const logoutButton = await screen.findByRole("button", { name: "Logout" })
  expect(logoutButton).toBeInTheDocument()
})
