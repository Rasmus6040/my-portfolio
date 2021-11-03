import React from 'react'

function MyCV({language}) {
    if(language == "danish"){
        return (
            <section className="CV-section">
                <h1 className="section__title center"> Rasmus Graversgaard Pedersen - CV </h1>
                <div className="cv__section">
                <h2 className="section__subtitle--CV"> Personlige oplysninger </h2>
                    <div className="cv__info">
                        Navn: 
                    </div>  
                    <div className="cv__text">
                    Rasmus Graversgaard Pedersen
                    </div>  
                    <br/>
                    <div className="cv__info">
                    Adresse:
                    </div>  
                    <div className="cv__text">
                    Otto Brandenburgsgade 18, 2. tv 8000 Aarhus C
                    </div>  
                    <br/>
                    <div className="cv__info">
                    Tlf. nr: 
                    </div>  
                    <div className="cv__text">
                    30 64 75 14
                    </div>  
                    <br/>
                    <div className="cv__info">
                    Mail:
                    </div>  
                    <div className="cv__text">
                    ri9@live.dk
                    </div> 
                    <br/>
                    <div className="cv__info">
                    Fødselsdato:
                    </div>  
                    <div className="cv__text">
                    21. December 1998
                    </div>  
                    <br/>
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Erhvervserfaring </h2>
                    <div className="cv__info">
                    2020
                    </div>  
                    <div className="cv__text">
                    Vikar ved CoolJobs hos EasyFood og SunFlow Ved EasyFood arbejdede jeg som logistikmedarbejder. Ved SunFlow stod jeg for at samle værktøj til hydralikpres.
                    </div>  
                    <br/>
                    <div className="cv__info">
                    2016 - 2021
                    </div>  
                    <div className="cv__text">
                    Livredder hos Slotssøbadet i Kolding, som livredder havde jeg 3 hovedopgaver rengøring, kundeservice og livredning. Udover at være livredder var jeg instruktør med eget hold.
                    </div>  
                    <br/>
                    <div className="cv__info">
                    2017 - 2020
                    </div>  
                    <div className="cv__text">
                    Receptionist / afløser hos Kolding Hotel Apartments, her har jeg været receptionist og hjulpet i deres morgenmadscafé
                    </div>  
                    <br/>
                    <div className="cv__info">
                    2013 - 2015
                    </div>  
                    <div className="cv__text">
                    Piccolo hos Kolding Hotel Apartments, ansvar for at lejlighedernes vinduer blev pudset indendørs og at hjælpe i receptionen.
                    </div>  
                    <br/>
                    <div className="cv__info">
                    2012 - 2013
                    </div>  
                    <div className="cv__text">
                    Reklameomdeler hos FK distribution, jeg havde en fast reklame / avisrute 2 gange i ugen.
                    </div>  
                    <br/> 
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Uddannelse </h2>
                    <div className="cv__info">
                    2020 - 
                    </div>  
                    <div className="cv__text">
                    Datalogi studerende på Aarhus Universitet, forventer at være færdig juni 2025.</div>  
                    <br/> 
                    <div className="cv__info">
                    2020
                    </div>  
                    <div className="cv__text">
                    European Bartender School, gik ud med gennemsnit på 92% til de 5 eksamener.</div>  
                    <br/> 
                    <div className="cv__info">
                    2019
                    </div>  
                    <div className="cv__text">
                    Værnepligtig ved Fredericia kaserne med karakteren A1, der svarer til 12.</div>  
                    <br/> 
                    <div className="cv__info">
                    2016-2019
                    </div>  
                    <div className="cv__text">
                    HTX på Hansenberg i Kolding, jeg gik ud med et gennemsnit på 10,8.</div>  
                    <br/>  
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Frivilligt arbejde </h2>
                    <div className="cv__info">
                    2020 -
                    </div>  
                    <div className="cv__text">
                    Har lavet og vedligeholder hjemmesiden https://www.flisepudser.dk/ for flisepudserlauget.</div><br/>  
                    <div className="cv__info">
                    2017 - 2019
                    </div>  
                    <div className="cv__text">
                    Fredagscafé udvalget, HTX Hansenberg, i fredagscaféen var jeg kasserer og var med til at planlægge konkurrencer såvel som begivenheder. Der var i gennemsnit 1 fredagscafé i måneden.</div><br/>  
                    <div className="cv__info">
                    2018 - 2020
                    </div>  
                    <div className="cv__text">
                    Kasserer i Venstre Ungdom Kolding.</div>  
                    <br/>  
                    <div className="cv__info">
                    2017
                    </div>  
                    <div className="cv__text">
                    Frivillig til slotssøbadets triathlon.</div>  
                    <br/>  
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Sprog </h2>
                    <div className="cv__info">
                    Engelsk
                    </div>  
                    <div className="cv__text">
                    Jeg kan tale, skrive og forstå engelsk på højt niveau, mit bartenderkursus blev f.eks. taget på engelsk.</div>  
                    <br/>  
                    <div className="cv__info">
                    Tysk
                    </div>  
                    <div className="cv__text">
                    Kan skrive og tale tysk på 10. klasse niveau. Har blandt andet brugt det til at tale med turister i Slotssøbadet.</div>  
                    <br/>  
    
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Kompetencer </h2>
                    <ul>
                    <li>React, hvor jeg har fulgt tutorials på youtube samt lavet min egen hjemmeside.</li>
                    <li>Java, her er både styr på det funktionelle såvel som det objektorienteret.</li>
                    <li>Scala, i 2. semester lavede vi et programmeringssprog i kurset programmeringssprog  </li>
                    <li>HTML / CSS, har lavet flere hjemmesider og har i CSS brugt ting som transition, variabler og media queries.</li>
                    <li>JavaScript, har med p5 library lavet et ski spil et udkast til backgammon og et tredje spil. Derudover har jeg lavet en todo-list hvor der kan oprettes flere lister der kan rykkes rundt og resizes. Dette er lavet i rent JavaScript ved brug af eventlistners og classes i JavaScript.  </li>
                    <li>Har god kendskab til Word, Excel og Powerpoint.</li>
    
                    </ul>
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Fritidsinteresser </h2>
                    <ul>
                    <li>Udfordre mig selv med at lære nye ting.</li>
                    <li>Har lavet et par hjemmesider og SEO for disse.</li>
                    <li>Har altid haft et kærligt hjerte til at træne.</li>
                    </ul>
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Udtalelser kan fremskaffes! </h2>
                </div>
                <div className="cv__section"><br/></div>
            </section>
        )
    }else{
        return (
            <section className="CV-section">
                <h1 className="section__title center"> Rasmus Graversgaard Pedersen - CV </h1>
                <div className="cv__section">
                <h2 className="section__subtitle--CV"> Personal Information </h2>
                    <div className="cv__info">
                        Name: 
                    </div>  
                    <div className="cv__text">
                    Rasmus Graversgaard Pedersen
                    </div>  
                    <br/>
                    <div className="cv__info">
                    Adress:
                    </div>  
                    <div className="cv__text">
                    Otto Brandenburgsgade 18, 2. tv 8000 Aarhus C
                    </div>  
                    <br/>
                    <div className="cv__info">
                    Tlf. nr: 
                    </div>  
                    <div className="cv__text">
                    30 64 75 14
                    </div>  
                    <br/>
                    <div className="cv__info">
                    Mail:
                    </div>  
                    <div className="cv__text">
                    ri9@live.dk
                    </div> 
                    <br/>
                    <div className="cv__info">
                    Birthday:
                    </div>  
                    <div className="cv__text">
                    21. December 1998
                    </div>  
                    <br/>
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Work experience </h2>
                    <div className="cv__info">
                    2020
                    </div>  
                    <div className="cv__text">
                    Substitute at CoolJobs at EasyFood and SunFlow At EasyFood I worked as a logistics employee. At SunFlow, I was in charge of assembling tools for the hydraulic press.
                    </div>  
                    <br/>
                    <div className="cv__info">
                    2016 - 2021
                    </div>  
                    <div className="cv__text">
                    Lifeguard at Slotssøbadet in Kolding, as a lifeguard I had 3 main responsibilities cleaning, customer service and lifeguarding. I were a instructor besides been a lifeguard.
                    </div>  
                    <br/>
                    <div className="cv__info">
                    2017 - 2020
                    </div>  
                    <div className="cv__text">
                    Receptionist / Substitute at Kolding Hotel Apartments. I've helped out as a receptionist and in the breakfast café.
                    </div>  
                    <br/>
                    <div className="cv__info">
                    2013 - 2015
                    </div>  
                    <div className="cv__text">
                    Piccolo at Kolding Hotel Apartments. I had the responsibility for the window cleaning in the apartments and I helped in the reception. 
                    </div>  
                    <br/>
                    <div className="cv__info">
                    2012 - 2013
                    </div>  
                    <div className="cv__text">
                    Advertising distributor at FK distribution, I had a regular advertising / newspaper route twice a week.
                    </div>  
                    <br/> 
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Education </h2>
                    <div className="cv__info">
                    2020 - 
                    </div>  
                    <div className="cv__text">
                        Computer Science student at Aarhus University, I expect to graduate in Juni 2025.</div>  
                    <br/> 
                    <div className="cv__info">
                    2020
                    </div>  
                    <div className="cv__text">
                    European Bartender School, I graduated with a 92% average in the 5 examins</div>  
                    <br/> 
                    <div className="cv__info">
                    2019
                    </div>  
                    <div className="cv__text">
                    Recruit in the Military, I graduated with the grade A1, which corresponds to 12.</div>  
                    <br/> 
                    <div className="cv__info">
                    2016-2019
                    </div>  
                    <div className="cv__text">
                        HTX at Hansenberg in Kolding, I graduated with an average of 10,8.</div>  
                    <br/>  
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Volunteering </h2>
                    <div className="cv__info">
                    2020 -
                    </div>  
                    <div className="cv__text">
                        I've made and maintained the website https://www.flisepudser.dk/ for flisepudserlauget.</div><br/>  
                    <div className="cv__info">
                    2017 - 2019
                    </div>  
                    <div className="cv__text">
                    The Friday bar at HTX Hansenberg. In the Friday bar, I was the accountant and was the event manager. We had an average of one Friday bar a month.</div><br/>  
                    <div className="cv__info">
                    2018 - 2020
                    </div>  
                    <div className="cv__text">
                    Accountant in Venstre youth in Kolding Kasserer i Venstre Ungdom Kolding.</div>  
                    <br/>  
                    <div className="cv__info">
                    2017
                    </div>  
                    <div className="cv__text">
                    Volunteer at Slotssøbadets Triathlon.</div>  
                    <br/>  
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Language </h2>
                    <div className="cv__info">
                    Danish
                    </div>  
                    <div className="cv__text">
                    I'm fluent in Danish</div>  
                    <br/>
                    <div className="cv__info">
                    English
                    </div>  
                    <div className="cv__text">
                    I can write, speak and understand English on a high level, my bartender course was in English.</div>  
                    <br/>  
                    <div className="cv__info">
                    German
                    </div>  
                    <div className="cv__text">
                    I can write and speak German on a tourist level.</div>  
                    <br/>  
            
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Skills </h2>
                    <ul>
                        <li> React, where I have followed tutorials on youtube and made my website. </li>
                        <li> Java, here I know both the functional and the object-oriented part. </li>
                        <li> Scala, in the 2nd semester we did a programming language in the course programming language </li>
                        <li> HTML / CSS, have created several websites and in CSS have used things like transition, variables and media queries. </li>
                        <li> JavaScript, with p5 library has made a ski game a draft of backgammon and a third game. In addition, I have made a to-do list where several lists can be created that can be moved around and resized. This is done in pure JavaScript using event listeners and classes in JavaScript. </li>
                        <li> Has a good knowledge of Word, Excel and Powerpoint. </li>
                    </ul>
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> Hobbies </h2>
                    <ul>
                    <li> Challenge myself by learning new things.</li>
                    <li> I've made a couple of websites and done some SEO on these.</li>
                    <li> I've always had something for training.</li>
                    </ul>
                </div>
                <div className="cv__section">
                    <h2 className="section__subtitle--CV"> I can get Recommendation if needed! </h2>
                </div>
                <div className="cv__section"><br/></div>
            </section>
        )
    }
}

export default MyCV
