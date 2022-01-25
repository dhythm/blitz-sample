import db from "db"

export default async function getUsers(_ = null, _ctx = null) {
  const user = await db.user.findMany({
    select: { id: true, name: true, email: true, role: true },
  })

  return user
}
