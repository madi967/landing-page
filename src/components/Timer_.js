import React from "react";
import Timer from 'react-compound-timer';

export default function Timer_(){
    var temps1=new Date();
    var jourf=10;//date de lancement en octobre

    var reste=0;
    if(temps1.getMonth()===10){
        //on est en octobre
        reste=(jourf-temps1.getDate())*24*60*60*1000;//nombre de jour restant en seconde
    }
    else{
        //on est en novembre
        reste =((30-temps1.getDate())+jourf)*24*60*60*1000;
    }
    reste=reste+(24-temps1.getHours())*60*60*1000;//nombre d'heure restant en seconde
    reste=reste+(60-temps1.getMinutes())*60*1000;//nombre de minute restant en seconde
    reste=reste+(60-temps1.getSeconds())*1000;//nombre de seconde restant*/
    return(
        <div className="timer">
        <Timer
            initialTime={reste}
            direction="backward"
        >
            {() => (
                <React.Fragment>
                  <span className="timer-element">  <Timer.Days /> Jours - </span>
                  <span className="timer-element"> <Timer.Hours /> Heures - </span>
                  <span className="timer-element"> <Timer.Minutes /> minutes - </span>
                  <span className="timer-element">   <Timer.Seconds /> secondes </span>
                    {/*<Timer.Milliseconds /> milliseconds*/}
                </React.Fragment>
            )}
        </Timer>
        </div>
    );
}
