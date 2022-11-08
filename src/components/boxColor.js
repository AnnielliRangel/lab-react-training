function BoxColor({ r, g, b }) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  return (
    <div
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        border: `4px`,
        margin: `5px`,
        padding: `40px`,
        height: `100px`,
        fontSize: `24px`,
        alignItems: `center`,
      }}
    >
      rgb({r},{g},{b})
      <h6 style={{
        fontSize: `24px`,
        alignItems: `center`,
      }}
        >{'#' + componentToHex(r) + componentToHex(g) + componentToHex(b)}</h6>
    </div>
  );
}

export default BoxColor;
