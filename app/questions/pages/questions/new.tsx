import Layout from "app/layouts/Layout"
import QuestionForm from "app/questions/components/QuestionForm"
import createQuestion from "app/questions/mutations/createQuestion"
import { BlitzPage, Link, useMutation, useRouter } from "blitz"

const NewQuestionPage: BlitzPage = () => {
  const router = useRouter()
  const [createQuestionMutation] = useMutation(createQuestion)

  return (
    <div>
      <h1>Create New Question</h1>

      <QuestionForm
        initialValues={{}}
        onSubmit={async (event) => {
          try {
            const question = await createQuestionMutation({
              data: {
                text: event.target[0].value,
                choices: {
                  create: [
                    { text: event.target[1].value },
                    { text: event.target[2].value },
                    { text: event.target[3].value },
                  ],
                },
              },
            })
            alert("Success!" + JSON.stringify(question))
            router.push(`/questions/${question.id}`)
          } catch (error) {
            alert("Error creating question " + JSON.stringify(error, null, 2))
          }
        }}
      />

      <p>
        <Link href="/questions">
          <a>Questions</a>
        </Link>
      </p>
    </div>
  )
}

NewQuestionPage.getLayout = (page) => <Layout title={"Create New Question"}>{page}</Layout>

export default NewQuestionPage
