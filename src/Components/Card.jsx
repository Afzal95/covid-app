import react from "react";
import styles from "./Card.module.css";

function Card({el}){
//    console.log(el);

    return  (<div className={styles.border}>
    <h1 style={{color:"#47a047",margin:"10px",width:"80%"}}>Schedule Your Vaccination</h1>
            <div className={styles.card}>

            <p>
            <p>District <h4>{el.district_name}</h4></p>
            <p>State <h4>{el.state_name}</h4></p>
            </p>
                <div>
                        <p>Center address<h4>{el.address}</h4></p>
                        <p>Min age limit allowed<h4>{el.min_age_limit}</h4></p>
                        <p>Vaccine name<h4>{el.vaccine}</h4></p>
                </div>

                <div>
                        <h3> Available time slots for vaccination</h3>
                        
                        {el.slots.map((e,i)=>{
                            return <p key={i}>{e}</p>
                        })}
                        <a className={styles.reg} href="https://selfregistration.cowin.gov.in/" target="_blank">click here for registration</a>
                </div>
           </div>
           </div>
           )
}

export {Card};