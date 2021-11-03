import React from 'react'
import Box from './Box';
import ValT from '../../images/ValT.jpg'
import POW from '../../images/POW.jpg'
import Torden from '../../images/Torden.jpg'


function Portfolio({language}) {
    if(language == "danish"){
        return (  
            <section className="portfolio">
                <Box info={"Spillet er linket til Github hvor i kan se koden. Jeg har lavet spillet i en skibus på vej til Val Thorens i 3.G."} text="Ski spil" image={ValT} link={"https://github.com/Rasmus6040/Projects/tree/master/Val%20thorens"}/>
                <Box info={"Spillet er linket til Github hvor i kan se koden. Spillet er en remaster af et spil jeg lavede i 10. klasse."}text="POW" image={POW} link={"https://github.com/Rasmus6040/Projects/tree/master/Pow"}/>
                <Box info={"Hjemmeside der er lavet i 3.G til natklubben TordenSkiold i Kolding"}text="TordenSkiold" image={Torden} link={"https://github.com/Rasmus6040/Projects/tree/master/Torden"}/>
            </section>
        )
    }else{
        return (  
            <section className="portfolio">
                <Box info={"The game is linked to Github so you can see the code. I made the game in a skibus on the way to Val Thorens in my third year of Gymnasium."} text="Ski Game" image={ValT} link={"https://github.com/Rasmus6040/Projects/tree/master/Val%20thorens"}/>
                <Box info={"The game is linked to Github so you can see the code. The game is a remaster of a game I made in 10th grade."}text="POW" image={POW} link={"https://github.com/Rasmus6040/Projects/tree/master/Pow"}/>
                <Box info={"The website was made for a the nightclub TordenSkiold in Kolding in my third year of Gymnasium."}text="TordenSkiold" image={Torden} link={"https://github.com/Rasmus6040/Projects/tree/master/Torden"}/>
            </section>
        )
    }

}

export default Portfolio
