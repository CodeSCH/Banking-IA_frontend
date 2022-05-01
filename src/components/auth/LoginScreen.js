import '../../styles/components/auth/login.css';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { fetchNotToken } from '../../helpers/fetch';
import Swal from 'sweetalert2';

const initialState = {
  card: '',
  dni: '',
  password: '',
};

export const LoginScreen = () => {
  const [valuesForm, handleInputChange] = useForm(initialState);
  const { card, dni, password } = valuesForm;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      const resp = await fetchNotToken('auth/login', valuesForm, 'POST');
      const body = await resp.json();

      if (body.ok) {
        // Aqui redirigimos y guardamos el token en el localStorage
        Swal.fire('Success', body.msg, 'success');
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    }
  };

  const isFormValid = () => {
    if (card.length < 5) {
      Swal.fire('Error', 'El número de tarjeta debe tener al menos 5 dígitos', 'error');
      return false;
    } else if (dni.length < 5) {
      Swal.fire('Error', 'El DNI debe tener al menos 5 dígitos', 'error');
      return false;
    } else if (password.length < 5) {
      Swal.fire('Error', 'La contraseña debe tener al menos 5 caracteres', 'error');
      return false;
    }
    return true;
  };

  return (
    <div className="LogForm animate__animated animate__fadeIn">
      <section className="containerLog">
        <div className="user singinBx">
          <div className="imgBx">
            <div className="bubble">Haz Tu Deposito o Transferencia Ahora!</div>
            <img src="../assets/auth/bank.svg" alt="" />
          </div>
          <div className="formBx">
            <form onSubmit={handleLogin}>
              <h2>Sing In</h2>
              <input type="text" name="card" placeholder="N° Tarjeta" value={card} onChange={handleInputChange} />
              <input type="text" name="dni" placeholder="N° Dni" value={dni} onChange={handleInputChange} />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleInputChange}
              />
              <br></br>
              <input type="submit" value="Login" />
              <p className="signup">
                ¿Aún no tienes cuenta? <Link to="/auth/register">Registrate</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
