import React from 'react';
import "./Fields.css";

export const MultiChoice = ({title, opts = []}) => {
    return (
        <form className="Field">
            <h3>
                { title }
            </h3>
            {opts.map((str, index) => (
                <label className="RadioOpt">
                    <input
                        type="radio"
                        name="radio_btn"
                        value={ index }
                    />
                    { str }
                </label>
            ))}
        </form>
    );
};

export const MultiSelect = ({title, opts = []}) => {
    return (
        <form className="Field">
            <h3>
                { title }
            </h3>
            {opts.map((str, index) => (
                <label className="RadioOpt">
                    <input
                        type="checkbox"
                        name="radio_btn"
                        value={ index }
                    />
                    { str }
                </label>
            ))}
        </form>
    );
};

export const ShortText = ({title}) => {
    return (
        <div className="Field">
            <h3>
                { title }
            </h3>
        </div>
    );
};