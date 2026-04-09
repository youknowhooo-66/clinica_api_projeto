import * as C from './styles'

//components
import Toolbar from '../../components/ui/Toolbar'
import SideMenu from '../../components/ui/SideMenu'
import ConsultationForm from '../../components/ui/ConsultationForm'

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