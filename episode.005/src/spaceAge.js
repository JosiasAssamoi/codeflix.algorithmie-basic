export default function spaceAge(planet, seconds) {
    
    const planetsCoef= {Mercury: 0.2408467,Venus: 0.61519726,Mars: 1.8808158,
    Jupiter:  11.862615 ,Saturn:  29.447498 ,Uranus:  84.016846 ,Neptune: 164.79132}

    let day = seconds / (24 * 3600);
    let years = (day / 365.25)
    if (planet != "Earth") {
        years= years / planetsCoef[planet]
    }


    return parseFloat(years.toFixed(2))

}