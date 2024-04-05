import './App.css';
import { ComponenteHijo } from './componentes/ComponenteHijo';

function App() {
  return (
    <>
      <ComponenteHijo 
          name={'Martin'} 
          apeliido1={'Segovia'}
          edad={37}
          clickReturnName={(nameComplete) =>{
              console.log(nameComplete);
              
          }}  
        />
    </>
  );
}

export default App;
