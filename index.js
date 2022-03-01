let num = document.getElementById('num').value
let metersEl = document.getElementById('meters')
let feetEl = document.getElementById('feet')
let litersEl = document.getElementById('liters')
let gallonsEl = document.getElementById('gallons')
let kilosEl = document.getElementById('kilos')
let poundsEl = document.getElementById('pounds')

num.textContent = num 




function conversion(){
    num = document.getElementById('num').value
     let resultMeters =  num  * 3.280
    let resultFeet =  num  * 0.340

    let roundedFeet = resultFeet.toFixed(3)
    let roundedMeters = resultMeters.toFixed(3)

    metersEl.textContent = num +" meters = " +roundedMeters +" feet"
    feetEl.textContent = num +" feet = " +roundedFeet + " meters"

    let resultLiters = num * 0.264
    let resultGallons = num *3.785

     let roundedLiters = resultLiters.toFixed(3)
    let roundedGallons = resultGallons.toFixed(3)
    
    litersEl.textContent = num +" liters = " +roundedLiters +" gallons"
    gallonsEl.textContent =  num +" gallons = " +roundedGallons +" liters"
    
    let resultKilos = num * 2.204
    let resultPounds = num / 2.204

     let roundedKilos = resultKilos.toFixed(3)
    let roundedPounds = resultPounds.toFixed(3)
    
    kilosEl.textContent = num +" kilos = " +roundedKilos +" pounds"
    poundsEl.textContent =  num +" pounds = " +roundedPounds +" kilos"  
}

conversion()
