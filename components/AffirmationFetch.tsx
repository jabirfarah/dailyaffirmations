// import react native
import React, { useEffect } from 'react'
import { Text, } from 'tamagui'
import { useState } from 'react'


const AffirmationFetch = () => {

    const [affirmation, setAffirmation] = useState('')

    const today = new Date();
    const midnight = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    console.log(midnight)
 
    useEffect(() => {
        const affirmation = async () => {
            const res = await fetch('https://www.affirmations.dev/');
            const json = await res.json();
            const jsonParse = await JSON.parse(JSON.stringify(json))
            setAffirmation(jsonParse.affirmation);
        }
       affirmation();
    }, [])
    console.log(affirmation);


  return (
    <Text>{affirmation}</Text>
  )
}

export default AffirmationFetch