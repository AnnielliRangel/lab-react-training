function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const nuncard = number.split('').slice(12, 16);
  type = "/src/assets/images/visa.png"
  return (
    <div style={{display: `flex`}}>
      <div
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
          borderRadius: `15px`,
          width: `280px`,
          height: `150px`,
          
        }}
      >
        <img src={type = "/src/assets/images/visa.png"} alt="card logo" />
        <h2>*************{nuncard}</h2>

        <p>
          Expires {expirationMonth}/{expirationYear} {bank}
        </p>
        <p> {owner} </p>
      </div>
    </div>
  );
}

export default CreditCard;
