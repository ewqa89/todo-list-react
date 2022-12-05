import React, { useState } from 'react';
import Buttons from "./Buttons";
import Section from "./Section";
import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Container from "./Container";

const tasks = [
    { id: 1, content: "przejść na react", done: true },
    { id: 2, content: "zjeść obiad", done: false },
];
const hideDone = false;

function App() {
    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />} />

            <Section
                title="Lista zadań"
                body={<Tasks tasks={tasks} hideDone={hideDone} />}
                extraHeaderContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                    />
                }
            />
        </Container>
    );
}

export default App;
