import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { isEmail } from 'validator';
import { fetchNotToken } from '../../helpers/fetch';

import '../../styles/components/auth/register.css';

/*eslint-disable*/

const initialState = {
  img: '',
  card: '',
  fullname: '',
  email: '',
  dni: '',
  password: '',
};

export const RegisterScreen = () => {
  const inputIMG = useRef();
  const [valuesForm, handleInputChange] = useForm(initialState);
  const { img, card, fullname, email, dni, password } = valuesForm;

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(valuesForm);
    if (isFormValid()) {
      const resp = await fetchNotToken('auth/register', valuesForm, 'POST');
      const body = await resp.json();

      if (body.ok) {
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

  const st = {
    border: '5px solid black',
    display: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
  };

  return (
    <div className="RegForm animate__animated animate__fadeIn">
      <section className="containerReg">
        <div className="user singupBx">
          <div className="formBx">
            <form encType="multipart/form-data">
              <div className="form__img">
                <label>
                  <i className="fa-solid fa-camera"></i>
                  <input type="file" style={st}></input>
                </label>
              </div>
            </form>

            <form onSubmit={handleRegister} encType="multipart/form-data">
              <h2>Sing Up</h2>

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
