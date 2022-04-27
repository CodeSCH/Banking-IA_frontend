import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { isEmail } from 'validator';

import '../../styles/components/auth/register.css';

const initialState = {
  card: '',
  fullname: '',
  email: '',
  dni: '',
  password: '',
};

export const RegisterScreen = () => {
  const inputIMG = useRef();
  const [valuesForm, handleInputChange, reset] = useForm(initialState);
  const { card, fullname, email, dni, password } = valuesForm;

  const handleIMG = () => {
    inputIMG.current.click();
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid() === true) {
      Swal.fire('Success', 'Register success', 'success');
      // Llamamos al fetch para registrar al usuario
    }
  };

  const isFormValid = () => {
    if (card.length < 5) {
      Swal.fire('Error', 'El número de tarjeta debe tener al menos 5 dígitos', 'error');
      return false;
    } else if (fullname.length < 5) {
      Swal.fire('Error', 'El nombre debe tener al menos 5 caracteres', 'error');
      return false;
    } else if (!isEmail(email)) {
      Swal.fire('Error', 'El email no es válido', 'error');
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
    <div className="RegForm animate__animated animate__fadeIn">
      <section className="containerReg">
        <div className="user singupBx">
          <div className="formBx">
            <form onSubmit={handleRegister}>
              <h2>Sing Up</h2>
              <div className="form__img" onClick={handleIMG}>
                <i className="fa-solid fa-camera"></i>
              </div>

              <div className="form__group form__hide">
                <input className="form__input form__input" ref={inputIMG} type="file" />
              </div>
              <input type="text" name="card" placeholder="N° Tarjeta" value={card} onChange={handleInputChange} />
              <input
                type="text"
                name="fullname"
                placeholder="Nombres/Apellidos"
                value={fullname}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleInputChange}
              />
              <input type="text" name="dni" placeholder="N° Dni" value={dni} onChange={handleInputChange} />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleInputChange}
              />
              <br></br>
              <input type="submit" value="Register" />
              <p className="signup">
                ¿Tienes una cuenta? <Link to="/auth/login">Inicia Sesión</Link>
              </p>
            </form>
          </div>
          <div className="imgBxR">
            <div className="bubbleR">Inicia Tu Cuenta Ahora y Disfruta de los Beneficios</div>
            <img src="../assets/auth/creditcard.svg" alt="img" />
          </div>
        </div>
      </section>
    </div>
  );
};
