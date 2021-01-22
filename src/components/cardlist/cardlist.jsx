import React from 'react'

const CardListItem = ({ title, description, type }) => {
    const trueDesc = description || <br />
    return (
        <div className="column is-one-third">
            <div className="box">
                <p className="title is-4">
                    {title}
                </p>
                <p className="subtitle is-6">
                    {trueDesc}
                </p>
                <div className="is-flex is-justify-content-space-between is-align-content-center">
                    <span className="tag is-info is-light">{type}</span>
                    <a class="material-icons" href="#">
                        <span class="material-icons">
                            center_focus_weak
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

const CardList = ({items}) => {

    // fetch('http://127.0.0.1:8000/api/cards/')
    //     .then(res => res.json())
    //     .then(res => console.log(res))

    return (
        <div className="columns is-multiline">
            {items.map((el, index) => <CardListItem {...el} key={index}/>)}
        </div>
    )
}

export default CardList