import { Component } from "react";
import Card from "./card/card.component";
import './card-list.component.css'

const CardList = ({monsters}) => (
        <div className="card-list">
            {monsters.map(monster => (
                <Card monster={monster}/>
            ))}
        </div>
    )


export default CardList;