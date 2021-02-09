# Installation

```
npx blitz new blitz-sample
✔ Pick a form library (you can switch to something else later if you want) · React Final Form

cd blitz-sample
blitz start
```

# Generating content

```
blitz generate all question text:string "choices:choice[]"
blitz generate resource choice text "votes:int:default[0]" belongsTo:question

blitz prisma migrate dev --preview-feature
✔ Name of migration … init db
```

```
blitz console

⚡️ > await db.question.findMany()
[]
⚡️ > let q = await db.question.create({data: {text: "What's new?"}})
undefined
⚡️ > q
{
  id: 1,
  createdAt: 2021-02-09T09:07:03.150Z,
  updatedAt: 2021-02-09T09:07:03.151Z,
  text: "What's new?"
}
⚡️ > q.text
"What's new?"
⚡️ > q.createdAt
2021-02-09T09:07:03.150Z
⚡️ > q = await db.question.update({where: {id:1}, data: {text: "What's up?"}})
{
  id: 1,
  createdAt: 2021-02-09T09:07:03.150Z,
  updatedAt: 2021-02-09T09:08:06.528Z,
  text: "What's up?"
}
⚡️ > await db.question.findMany()
[
  {
    id: 1,
    createdAt: 2021-02-09T09:07:03.150Z,
    updatedAt: 2021-02-09T09:08:06.528Z,
    text: "What's up?"
  }
]
⚡️ >
```
