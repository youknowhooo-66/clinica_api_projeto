import * as C from './styles'


//components
import Toolbar from "../ui/Toolbar"
import SideMenu from "../ui/SideMenu"
import PatientDetails from "../ui/PatientDetails"


//style




export default function Dashboard () {
  return (
    <>
    <section>
      <C.App>
        <SideMenu/>
      
        <C.Main>
          <Toolbar title="Informações do Paciente" />
          
         

          <C.Content>
              
              <PatientDetails/>
          </C.Content>

           
        </C.Main>
  
      
      
      </C.App>
      </section>
    </>
  )
}