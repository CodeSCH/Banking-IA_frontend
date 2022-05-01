export const UserInfo = () => {
  const iconstyle = {
    color: '#00a8af',
    'font-size': '50px',
  };

  return (
    <div className="User__card__container">
      <div className="card__header">
        <p>CUENTA</p>
      </div>
      <div className="card__body__info">
        <span style={iconstyle}>
          <i class="fa-solid fa-sack-dollar"></i>
        </span>
        <p>Saldo de Cuenta Sueldo:</p>
        <p>
          <b>S/.1000</b>
        </p>
      </div>
      <div className="card__body__info">
        <span style={iconstyle}>
          <i class="fa-solid fa-piggy-bank"></i>
        </span>
        <p>Saldo de Cuenta Ahorro:</p>
        <p>
          <b>S/.1000</b>
        </p>
      </div>
    </div>
  );
};
