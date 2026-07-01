import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {

    const [completed, setCompleted] = useState([]);

    const completeLesson = (id) => {

        if (!completed.includes(id)) {

            setCompleted([...completed, id]);

        }

    };

    return (

        <CourseContext.Provider value={{

            completed,

            completeLesson

        }}>

            {children}

        </CourseContext.Provider>

    );

}

export const useCourse = () => useContext(CourseContext);
