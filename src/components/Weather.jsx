const Weather=({ temperature })=>{
  let message;
  
  if (temperature > 25) {
    message = "It's sunny today!";
  } else if (temperature < 10) {
    message = "It's cold today!";
  }

  return (
    
    <>

    <div>
      <p id="weatherCss"> {message}</p>
    </div>
    </>
  );
}
export default Weather;
