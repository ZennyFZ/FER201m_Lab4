import React from 'react';
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
export default function ModalCase({ setIsOpen, film }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id='modal1' className='modal' style={{display: 'block', top:'35%'}}>
                <div className='modal-content' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <h4>{film.title} Trailer</h4>
                    <p>
                        <iframe width="100%" height="400px" src={film.clip} title={film.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </p>
                    </div>
                <div className='modal-footer' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <a href='#!' className='modal-close red-text'>Close</a>
                </div>
            </div>
        </div>
    )
}