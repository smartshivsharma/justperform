import React from 'react';


const SocialMenu = () => {

    return (
        <>
            <ul className="list-inline mb-0">
                <li className="list-inline-item">
                    <a href="javascript:void(0)" className="btn p-0" target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin socilaIcons"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="javascript:void(0)" className="btn p-0" target="_blank" rel="noreferrer">
                        <i className="lab la-facebook-f socilaIcons"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="javascript:void(0)" className="btn p-0" target="_blank" rel="noreferrer">
                        <i className="lab la-twitter socilaIcons"></i>
                    </a>
                </li>
                
            </ul>
        </>

    )
}

export default SocialMenu;