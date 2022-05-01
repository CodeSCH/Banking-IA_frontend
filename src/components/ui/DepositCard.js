export const DepositCard = () =>{
    return(
        <div className="Deposit__card__container">
            <div className="card__header">
                <p>DEPÓSITO</p>
                </div>
                <div className="card__body">
                    <label>Ingrese el Monto a Depositar:</label>
                    <input type="text" placeholder="Monto S/."/>
                </div>
        </div>
    )
}