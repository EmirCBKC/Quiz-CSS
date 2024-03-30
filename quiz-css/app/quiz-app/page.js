import QuizLayout from '@/components/JavascriptQuiz/QuizLayout';

export function generateMetadata() {

    return {
        title: "Javascript Quiz",
        description: "quiz uygulaması"
    };
}

export default function QuizAppPage() {

    return (
        <QuizLayout />
    )
}
