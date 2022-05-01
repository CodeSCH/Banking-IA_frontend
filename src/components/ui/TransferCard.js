export const TransferCard = () => {
  return (
    <div className="Deposit__card__container">
      <div className="card__header">
        <p>TRANSFERENCIA</p>
      </div>
      <div className="card__body">
        <label>Ingrese el Monto a Depositar:</label>
        <input type="number" placeholder="Monto S/." /><br/>
        <label>Ingrese el N° de Cuenta Destino:</label><br/>
        <input type="text" placeholder="N° de cuenta" />
      </div>
    </div>
  );
};
