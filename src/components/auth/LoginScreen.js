import React from 'react';

export const LoginScreen = () => {
  return (
    <div>
      <div className="login">
        <div className="login__grid container">
          <form className="form ">
            <h3 className="form__heading">INICIAR SESIÓN</h3>
            <hr />
            <div className="form__group">
              <label className="form__label" htmlFor="number">
                N° Tarjeta:
              </label>
              <input className="form__input" type="text" id="number" />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="number">
                Dni:
              </label>
              <input className="form__input" type="text" id="number" maxLength="8" />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="password">
                Password:
              </label>
              <input className="form__input" type="password" id="password" />
            </div>

            <button className="form__button">Iniciar Sesión</button>
          </form>
          <div className="register__card">
            <h2>IMTERVAMK</h2>
            <img src="../assets/auth/card.png" alt="img" />
          </div>
        </div>
        <div className="copyright">
          <p>Copyright</p>
          <p>IMTERVAMK</p>
        </div>
      </div>
    </div>
  );
};
