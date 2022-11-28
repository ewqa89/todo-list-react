import Buttons from "./Buttons";
import Section from "./Section";
import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Container from "./Container";

const tasks = [
];
const hideDoneTasks = false;

function App() {
	
    return (
        <Container>
        <Header title="Lista zadań" 
        />
        <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} 
        />
        
        <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={ <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
        </Container>
    );
}

export default App;
