import * as C from './styles'


//components
import Toolbar from "../ui/Toolbar"
import SideMenu from "../ui/SideMenu"
import RegisterFormPatient from "../ui/RegisterFormPatient"


//style




export default function Dashboard () {
  return (
    <>
    <section>
      <C.App>
        <SideMenu/>
      
        <C.Main>
          <Toolbar title="Cadastro de Paciente" />
          
          <C.Content>
              <RegisterFormPatient/>
              
          </C.Content>

         

           
        </C.Main>
  
      
      
      </C.App>
      </section>
    </>
  )
}