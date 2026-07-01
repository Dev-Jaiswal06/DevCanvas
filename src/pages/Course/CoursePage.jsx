import { useParams } from "react-router-dom";

import CourseLayout from "../../layouts/CourseLayout";

import LessonSidebar from "../../features/lesson/LessonSidebar";

import LessonPage from "../../features/lesson/LessonPage";

import { getCourse } from "../../utils/getCourse";

import { getLesson } from "../../utils/getLesson";

import { getNextLesson } from "../../utils/getNextLesson";

import { getPreviousLesson } from "../../utils/getPreviousLesson";

function CoursePage(){

const {courseName,lessonSlug}=useParams();

const course=getCourse(courseName);

if(!course){

return <h1>Course Not Found</h1>

}

const lesson=

lessonSlug

? getLesson(course,lessonSlug)

: course.lessons[0];

const previous=getPreviousLesson(

course,

lesson.slug

);

const next=getNextLesson(

course,

lesson.slug

);

return(

<CourseLayout

sidebar={

<LessonSidebar

courseName={courseName}

course={course.title}

lessons={course.lessons}

/>

}

>

<LessonPage

lesson={lesson}

courseName={courseName}

previous={previous}

next={next}

/>

</CourseLayout>

)

}

export default CoursePage;
