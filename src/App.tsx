import { Questionnaire } from "@/components";
import { QuestionnaireProvider } from '@/context/questionnaireContext';

function App() {
  return (
    <QuestionnaireProvider>
      <Questionnaire />
    </QuestionnaireProvider>
  )
}

export default App;
