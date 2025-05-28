import React from 'react'

export default function CatImage(props) {
    return (
        <div >
            <button onClick={props.onClick}>{props.btnTxt}</button>
            {props.imageOfCat && <img
                style={{
                    height: 200,
                    width: 200,
                }}
                src={props.imageOfCat}
                alt="default text"
            />}

        </div>
    )
}
