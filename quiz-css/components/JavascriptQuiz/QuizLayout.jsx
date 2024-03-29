import { getQuestions } from '@/services/apiQuestions'
import Questions from './Questions';
import Style from "./quiz-layout.module.css";

export default async function QuizLayout() {

    const allQuestions = await getQuestions();

    const tenQuestion = allQuestions.filter((item) => item.id < 11);

    return (
        <div className={Style.container}>
            <Questions tenQuestion={tenQuestion} />
        </div>
    )
}
