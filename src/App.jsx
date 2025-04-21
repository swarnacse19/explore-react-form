import './App.css'
import ControlledField from './Component/ControlledField/ControlledField'
import Hooks from './Component/Hooks/Hooks'
//import UnControlled from './Component/Uncontrolled/Uncontrolled'
//import FormAction from './Component/FormAction/FormAction'
// import SimpleForm from './Component/SimpleForm/SimpleForm'

function App() {

  return (
    <>
      <h1>Explore react form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      <ControlledField></ControlledField>
      {/* <UnControlled></UnControlled> */}
      <Hooks></Hooks>
    </>
  )
}

export default App
