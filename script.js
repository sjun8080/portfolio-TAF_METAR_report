
// With checkwx for API resource // 

async function getTafMetar() {
  console.log("Function is running...");
  
  const icaoCode = document.getElementById("tafInput").value.trim().toUpperCase();
  
  if(!icaoCode) {
    alert("Please enter a valid ICAO airport code");
    return;
  
}
  const apiKey = "####";  
  
  try{
  //console.log(`Fetching TAF data for: ${icaoCode}...`);  
    
  const tafResponse = await fetch(`https://api.checkwx.com/taf/${icaoCode}/decoded`, {
    headers: { "X-API-Key": apiKey },
  }); 
  
  const metarResponse = await fetch(`https://api.checkwx.com/metar/${icaoCode}/decoded`, {
      headers: { "X-API-Key": apiKey },
    });
    
  //console.log("TAF API Response:", tafResponse); // Log the response
  
    if (!tafResponse.ok || !metarResponse.ok) {
      throw new Error(`HTTP error! Status: ${tafResponse.status}`);
    }

    const tafData = await tafResponse.json(); // Convert response to JSON
    const metarData = await metarResponse.json();
    
    
    console.log("TAF Data:", tafData); // Log the actual data
    console.log("METAR Data:", metarData);
    
    document.getElementById("taf").innerHTML =
      tafData.data.length > 0
        ? `<strong>TAF:</strong> ${tafData.data[0].raw_text}
        
        <p><strong>TAF Issued:</strong> ${tafData.data[0].timestamp.from}
        <p><strong>Valid Period:</strong> ${tafData.data[0].timestamp.to}
        <p><strong>Wind:</strong> ${tafData.data[0].forecast[0].wind.degrees}° at ${tafData.data[0].forecast[0].wind.speed_kts} knots
        <p><strong>Visibility:</strong> ${tafData.data[0].forecast[0].visibility.miles} miles
        <p><strong>Cloud Cover:</strong> ${tafData.data[0].forecast[0].clouds[0].text} at ${tafData.data[0].forecast[0].clouds[0].base_feet_agl} feet AGL.`
        
        : `Data is not available`

       // Do not modify below //
    document.getElementById("metar").innerHTML =
      metarData.data.length > 0
        ? `<strong>METAR:</strong> ${metarData.data[0].raw_text}
      <p><strong>Temperature:</strong> ${metarData.data[0].temperature.celsius}°C (${metarData.data[0].temperature.fahrenheit}°F)
      <p><strong>Wind:</strong> ${metarData.data[0].wind.degrees}° at ${metarData.data[0].wind.speed_kts} knots   
      <p><strong>Visibility:</strong> ${metarData.data[0].visibility.miles} miles
      <p><strong>Cloud Cover:</strong> ${metarData.data[0].clouds[0].text} at ${metarData.data[0].clouds[0].base_feet_agl} feet AGL`
       : `<strong>TAF:</strong> Data not available.`;      


        
    
    
       
       
       
      
    
    
    
   
   
        

    
 } catch (error) {
  
  console.error("Error fetching data:", error);
    document.getElementById("taf").innerHTML = `<strong>TAF:</strong> Error fetching data.`;
    document.getElementById("metar").innerHTML = `<strong>TAF:</strong> Error fetching data.`;
  
  
  
}


} 
  
console.log("JavaScript loaded and waiting for input...");  
  
  
  
  
  
  
  





















