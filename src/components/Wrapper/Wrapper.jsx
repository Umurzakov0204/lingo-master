import React from "react";
import './Wrapper.css'
import ofis from '../../img/ofis.jpg'

function Wrapper() {
    return (
        <>
            <div className={'wrapper'}>
                <img className={'wrapper__img'} src={ofis} alt={''} />
            </div>
        </>
    );
}

export default Wrapper;
