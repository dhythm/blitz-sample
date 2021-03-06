import Layout from "app/layouts/Layout"
import QuestionForm from "app/questions/components/QuestionForm"
import updateQuestion from "app/questions/mutations/updateQuestion"
import getQuestion from "app/questions/queries/getQuestion"
import { BlitzPage, Link, useMutation, useParam, useQuery, useRouter } from "blitz"
import { Suspense } from "react"

export const EditQuestion = () => {
  const router = useRouter()
  const questionId = useParam("questionId", "number")
  const [question, { setQueryData }] = useQuery(getQuestion, { where: { id: questionId } })
  const [updateQuestionMutation] = useMutation(updateQuestion)

  return (
    <div>
      <h1>Edit Question {question.id}</h1>
      <pre>{JSON.stringify(question)}</pre>

      <QuestionForm
        initialValues={question}
        onSubmit={async () => {
          try {
            const updated = await updateQuestionMutation({
              where: { id: question.id },
              data: { text: "Do you really love Blitz?" },
            })
            await setQueryData(updated)
            alert("Success!" + JSON.stringify(updated))
            router.push(`/questions/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error editing question " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditQuestionPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditQuestion />
      </Suspense>

      <p>
        <Link href="/questions">
          <a>Questions</a>
        </Link>
      </p>
    </div>
  )
}

EditQuestionPage.getLayout = (page) => <Layout title={"Edit Question"}>{page}</Layout>

export default EditQuestionPage
