import React from "react";
import './DayWeek.scss';
import CardStore from '../CardStore/CardStore';

export const DayWeek = ({ elem }) => 
{

    let arrayCardStore = elem.outlets;
    let projects = elem.projects;

    return (
        <div className="block-day-week">
            <h2 className="block-day-week__name">{elem.day_name}</h2>
            <div className="row">
                {
                    arrayCardStore.map((elem, index) => {
                        return (
                            <CardStore elem={elem} key={index} id={elem.id} projects={projects} />
                        )
                    })
                }
            </div>
        </div>
    )
}