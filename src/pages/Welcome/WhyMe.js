import React from 'react'
import Fade from 'react-reveal/Fade';

function WhyMe({language}) {
    if(language == "danish"){
        return (
            <section className="why-me-section" id="why-me">
                <h1 className="section__title center"> Hvorfor mig? </h1>
                <h2 className="section__subtitle center italics">Jeg er klar til at være med, parat til at blive udfordret og er altid smilende</h2>
                <div className="section__column">
                    <Fade left>
                    <div className="column1">
                        <h3 className="column-title">Klar til at være med</h3>
                        <p> Jeg har altid været typen, som helst gerne vil have at der 
                            skal ske noget hele tiden. <br/>
                            Dette er nok også grunden til at jeg altid er klar til at give en hjælpende hånd. Om det så er studiet, reunion eller med oprydning efter en fest, så kan man altid forvente at se mig hjælpe til. <br/>
                            Denne holdninger glæder jeg mig til at bruge hos jer!
                        </p> 
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="column2"> 
                        <h3 className="column-title"> Parat til at blive udfordret</h3>
                        <p>
                            Ved siden af studiet kan jeg godt lide at bruge tid på at lære nye ting. <br/>
                            Nogle af de ting jeg har udfordret mig selv med, har været at lære følgende ting: <br/>
                            - React <br/>
                            - Organisere (Hovedsagelig fester) <br/>
                            - Kommunikation <br/>
                            Måske næste udfordring er hos jer?
                        </p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column3"> 
                    <h3 className="column-title"> Altid smilende</h3>
                        <p className="no-margin-bottom">
                        Det med altid at være smilende er noget jeg altid har været. <br/> 
                        Dette har været specielt brugbart, da jeg arbejdede som <br/>receptionist 
                        for </p>
                        <div className="tooltip">(KHA)
                            <div className="top">
                                <p>Kolding Hotel Apartments</p>
                                <i></i>
                            </div>
                        </div>
                        <p className="no-margin-top no-margin-bottom">
                        og livredder hos </p>
                        <div className="tooltip">(SSBad)
                            <div className="top">
                                <p>Slotssøbadet</p>
                                <i></i>
                            </div>
                        </div>
                        <p className="no-margin-top">
                        Så håber da på at det bliver lige så brugbart hos jer. 
                        </p>
                    </div>
                    </Fade>
                </div>
            </section>
        )
    }else{
        return (
            <section className="why-me-section" id="why-me">
                <h1 className="section__title center"> Why me? </h1>
                <h2 className="section__subtitle center italics">I'm ready to help, Eager for a challenge and always smiling.</h2>
                <div className="section__column">
                    <Fade left>
                    <div className="column1">
                        <h3 className="column-title">I'm ready to help</h3>
                        <p> I've always been the type who likes to do something all the time.
<br/>
This is why I'm probably always ready to help. You'll likely see me helping by if it's study, reunion or cleaning after a party.
I see forward to using this attitude at your firm!
                        </p> 
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="column2"> 
                        <h3 className="column-title"> Eager for a challenge</h3>
                        <p>
                        I like to spend my spare time learning new stuff. <br/>
                        Some of the things I've learned by myself have been the following. <br/>
                        React <br/>
                        Organise (Mainly parties) <br/>
                        Communication <br/>
                        Maybe the next challenge will be at your firm? 
                        </p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column3"> 
                    <h3 className="column-title"> Always smiling</h3>
                        <p className="no-margin-bottom">
                        The thing with smiling is something that has always come easy. <br/>
                        This has been undoubtedly useful for me then I worked as a receptionist at</p>
                        <div className="tooltip">(KHA)
                            <div className="top">
                                <p>Kolding Hotel Apartments</p>
                                <i></i>
                            </div>
                        </div>
                        <p className="no-margin-top no-margin-bottom">
                        and lifegaurd at </p>
                        <div className="tooltip">(SSBad)
                            <div className="top">
                                <p>Slotssøbadet</p>
                                <i></i>
                            </div>
                        </div>
                        <p className="no-margin-top">
                        So I hope it'll be just as useful at your company. 
                        </p>
                    </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default WhyMe
