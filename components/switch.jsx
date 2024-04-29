"use client";
import { useEffect, useState } from "react";
import Cards from "./cards";
import Esqueleto from "./esqueleto"

export default function SwithModal() {

    const [ datos, setDatos ] = useState("");
    const [ mostrar, setMostrar ] = useState(true);

    useEffect(()=> {
      async function fetchData(){
        const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
        const data = await response.json();
        setDatos(data);
        setMostrar(false);
      }
      fetchData();
    },[] );

    return(
        <div>
        {
            mostrar ?
            <Esqueleto/>
            :
            <div>
               <Cards datos={datos}/>
            </div>
        }
        </div>
    )

}