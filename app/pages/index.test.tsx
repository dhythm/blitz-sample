import getCurrentUser from "app/users/queries/getCurrentUser"
import { render, screen } from "test/utils"
import Home from "./index"

// jest.mock("app/core/hooks/useCurrentUser")
// const mockUseCurrentUser = useCurrentUser as jest.MockedFunction<typeof useCurrentUser>
jest.mock("app/users/queries/getCurrentUser")
const mockUseGetUser = getCurrentUser as jest.MockedFunction<typeof getCurrentUser>

// test.skip("renders blitz documentation link", () => {
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

  mockUseGetUser.mockResolvedValue({
    id: 1,
    name: "User",
    email: "user@email.com",
    role: "user",
  })

  const { findByRole } = render(<Home />)

  const logoutButton = await findByRole("button", { name: "Logout" })
  expect(logoutButton).toBeInTheDocument()
})
