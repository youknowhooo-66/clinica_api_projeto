import * as C from './styles'

//components
import Toolbar from '../ui/Toolbar'
import SideMenu from '../ui/SideMenu'
import ConsultationForm from '../ui/ConsultationForm'

//style

export default function Dashboard () {
  return (
    <>
      <section>
        <C.App>
          <SideMenu />

          <C.Main>
            <Toolbar title='Cadastro de consulta' />

            <C.Content>
              <ConsultationForm />
            </C.Content>
          </C.Main>
        </C.App>
      </section>
    </>
  )
}