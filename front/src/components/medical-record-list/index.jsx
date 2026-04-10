//style

import * as C from './styles'


//components
import Toolbar from "../ui/Toolbar"
import SideMenu from "../ui/SideMenu"

import MedicalRecordList from "../ui/MedicalRecordList"






export default function Dashboard () {
  return (
    <>
    <section>
      <C.App>
        <SideMenu/>
      
        <C.Main>
          <Toolbar title="Listagem de Prontuários" />
          
         
          <C.ContentRecordList>
              
              <MedicalRecordList/>
          </C.ContentRecordList>

            
        </C.Main>
  
      
      
      </C.App>
      </section>
    </>
  )
}
