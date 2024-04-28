import { Button, Stack } from "react-bootstrap"; //permet d'importer le composant Stack à partir de la bibliothèque React Bootstrap.
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";
function App() {
  return (
    <Container className="my-4">
     <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Bugdet</Button>
        <Button variant="Outline-primary">Add Expense</Button>
     </Stack>
     <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fill,min(300px, 1fr))",
      gap:"10rem",
      alignItems:"flex-start",
      
     }}
     >
       <BudgetCard name="Entertainement" amount = {200} max={1000}>
      
      </BudgetCard>
     </div>
    
  </Container>
  ) 
}

export default App
