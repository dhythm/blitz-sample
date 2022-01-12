import getCurrentUser from "app/utils/server/templates/getCurrentUser"
import { render, screen } from "test/utils"
import Home from "./index"

jest.mock("blitz", () => ({
  ...jest.requireActual<any>("blitz"),
  Routes: {
    SignupPage: jest.fn().mockReturnValue(""),
    LoginPage: jest.fn().mockReturnValue(""),
  },
}))

// jest.mock("db", () => ({
//   user: { findFirst: jest.fn() },
// }))
// const mockUserFindFirst = db.user.findFirst as jest.MockedFunction<typeof db.user.findFirst>
// jest.mock("app/core/hooks/useCurrentUser")
// const mockUseCurrentUser = useCurrentUser as jest.MockedFunction<typeof useCurrentUser>
jest.mock("app/users/queries/getCurrentUser")
const mockGetCurrentUser = getCurrentUser as jest.MockedFunction<typeof getCurrentUser>

// test.skip("renders blitz documentation link", () => {
test("renders blitz documentation link", () => {
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
  mockGetCurrentUser.mockRejectedValue({
    id: 1,
    name: "User",
    email: "user@email.com",
    role: "user",
  })
  // mockUserFindFirst.mockRejectedValue({
  //   id: 1,
  //   name: "User",
  //   email: "user@email.com",
  //   role: "user",
  // })

  const { getByText } = render(<Home />)

  const linkElement = getByText(/Documentation/i)
  expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument()

  expect(linkElement).toBeInTheDocument()
})
