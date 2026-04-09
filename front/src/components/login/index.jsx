
import * as C from './styles';
import ImageGraphic from '../../assets/imgs/graphic.jpg';
import logoLab365 from '../../assets/imgs/logo-lab365.jpg';
import LoginForm from '../ui/LoginForm';

export default function Login() {
  
  return (
    <>
      <section>
        
        <C.Container>
          <C.Content>
            <C.ContentLeftLogin>
              <img src={ImageGraphic} className="grafico" alt="Gráfico" />
              <img src={logoLab365} className="logo" alt="logo lab 365" />
            </C.ContentLeftLogin>
            <C.ContentRightLogin>
              <LoginForm />
            </C.ContentRightLogin>
          </C.Content>
        </C.Container>
      </section>
    </>
  );
}