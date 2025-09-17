import { useState } from "react"
import './App.css'


const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]
  )

  const totalStrength = (team) => {
    let strength = 0
    team.forEach((fighter) => {
      strength += fighter.strength
    })
    return strength
    }
  totalStrength(team)
  
  const totalAgility = (team) => {
    let agility = 0
    team.forEach((fighter) => {
      agility += fighter.agility
  })
    return agility
  }
  totalAgility(team)


  const handleAddFighter = (fighterSelected) => {
    console.log(fighterSelected)
    if (money < fighterSelected.price) {
      return console.log("Not enough moneys")
    }
    const newZombieFighters = zombieFighters.filter((fighter) => {
      return fighter.id !== fighterSelected.id
  })
    setZombieFighters(newZombieFighters)
    setTeam([...team,fighterSelected])

    const updateMoney = money - fighterSelected.price
    setMoney(updateMoney)
  }
  
  const handleRemoveFighter = (fighterSelected) => {
    const newTeam = team.filter((fighter) => {
      return fighter.id !== fighterSelected.id
    })
    setTeam(newTeam)
    setZombieFighters([...zombieFighters,fighterSelected])

    const updateMoney = money + fighterSelected.price
    setMoney(updateMoney)
  }

  
  

  

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength(team)}</h2>
      <h2>Team Agility: {totalAgility(team)}</h2>

      <h2>Team</h2>
      {team.length ? (
       <div className="zombie-list">
          
          {team.map((fighter, id) => (

          <ul key={fighter.id}>
            
              <li> <img src={fighter.img} /> </li>
              <li> {fighter.name} </li>
              <li>Price: {fighter.price} </li>
              <li>Strength: {fighter.strength} </li>
              <li>Agility: {fighter.agility} </li>
              <button onClick={() => {handleRemoveFighter(fighter)}}>Remove</button>
              
          </ul>
            ))}
        </div> 

      ) : (
        <p> No Team Yet </p>
          )
      }
      
      <div className="zombie-list">
            {zombieFighters.map((fighter, id) => (

        <ul key={fighter.id}>
            
              <li> <img src={fighter.img} /> </li>
              <li> {fighter.name} </li>
              <li>Price: {fighter.price} </li>
              <li>Strength: {fighter.strength} </li>
              <li>Agility: {fighter.agility} </li>
              <button onClick={() => {handleAddFighter(fighter)}}>Add</button>
            
        </ul>
            ))}
      </div>
    </>

  )

}

export default App
