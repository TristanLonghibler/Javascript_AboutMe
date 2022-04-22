import React from 'react'
import Table from "../Table"
import me from './Images/me.jpg'


const AboutMe = () => {
  return (
    <div>

    

      <h4 style={{marginBottom: '10px', marginLeft: '50%'}}>About Tristan:</h4>

      <p style={{marginLeft: '35%', marginRight: '35%'}}>I am currently enrolled at University of Missouri Saint Louis. I will graduate in the fall of 2021, with a BA in computing technology. 
      I chose this path because my friends recomended it to me after a lot of soul searching.
      Another reason I chose this specific degree is because I dont need to take operating systems to graduate(RIP computer science majors).
      I turned twenty-four last july, and I am determined to prove myself as part of the top class students. I started college doing only gen-eds.
      This made my last two years of college only involve programing courses. It is a blessing and a curse. I get hard driven practice that will surely prepare
      me for the job force, but at times I feel the workload is undoable. My advice is to keep moving forward even when all hope is lost. Extentions have saved my
      grade so many times over. For more information unrelated to my career at UMSL, click on my hobbies page!
      </p>

  
      <Table/>

      
      <img style={{width:  '30%', height: '25%', display: 'block', marginLeft: '35%', marginRight: '35%'}} alt="Tristan" src={me}/>

    </div>

    
  )
}

export default AboutMe
