<<<<<<< HEAD
import React from 'react';

=======
import '../../styles/components/auth/login.css';
import { Link } from 'react-router-dom';
>>>>>>> 3314d8ed7332852be22dd8745b2f784fb1c61da2
export const LoginScreen = () => {
  /*eslint-disable*/
  return (
    <div className="LogForm">
      <section className="containerLog">
        <div className="user singinBx">
          <div className="imgBx">
            <img src="../assets/auth/bank.svg" />
          </div>
          <div className="formBx">
            <form>
              <h2>Sing In</h2>
              <input type="text" name="tarjeta" placeholder="N° Tarjeta" />
              <input type="text" name="dni" placeholder="N° Dni" />
              <input type="password" name="pass" placeholder="Contraseña" />
              <br></br>
              <input type="submit" value="Login" />
              <p className="signup">
              ¿Aún no tienes cuenta?<Link to="/auth/register">Registrarse</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
