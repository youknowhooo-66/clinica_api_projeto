//style
import * as C from './styles'



//components
import Toolbar from '../ui/Toolbar'
import SideMenu from "../ui/SideMenu"
import PatientsList from "../ui/PatientsList"

import PatientsCounter from "../ui/PatientsCounter"
import ConsultsCounter from "../ui/ConsultsCounter"
import ExamsCounter from "../ui/ExamsCounter"







export default function Dashboard () {
  return (
    <>
    <section>
      <C.App>
        <SideMenu/>
      
        <C.Main>
          <Toolbar title="Estatísticas e Informações" />
          
          <C.Content>
              <h2>Estatísticas do Sistema</h2>
              
          </C.Content>

          <C.Content>
              <PatientsCounter/>
              <ConsultsCounter/>
              <ExamsCounter/>
              
          </C.Content>

          <C.ContentPatientsList>
              
              <PatientsList/>
          </C.ContentPatientsList>

           
        </C.Main>
  
      
      
      </C.App>
      </section>
    </>
  )
}