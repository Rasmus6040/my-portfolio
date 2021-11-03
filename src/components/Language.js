import React from 'react'

function Language({language, toggleLanguage}) {
    if(language == "danish"){
        return (
            <div className="language">
                <p className="selected" onClick={() => toggleLanguage("danish")}>DA</p>
                <p onClick={() => toggleLanguage("english")}>EN</p>
            </div>
        )
    }
    else{
        return (
            <div className="language">
                <p onClick={() => toggleLanguage("danish")}>DA</p>
                <p className="selected" onClick={() => toggleLanguage("english")}>EN</p>
            </div>
        )
    }
}

export default Language
