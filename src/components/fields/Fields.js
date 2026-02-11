import React from 'react';
import "./Fields.css";

export const MultiChoice = ({id, required = false, title, opts = []}) => {
    return (
        <div className="Field">
            <h3>
                { title }{ required ? "*" : "" }
            </h3>
            {opts.map((opt, index) => (
                <label className="RadioOpt">
                    <input
                        type="radio"
                        name={ "radio_btn-" + id }
                        value={ opt }
                    />
                    { opt }
                </label>
            ))}
        </div>
    );
};

export const MultiSelect = ({id, required = false, title, opts = []}) => {
    return (
        <div className="Field">
            <h3>
                { title }{ required ? "*" : "" }
            </h3>
            {opts.map((opt, index) => (
                <label className="RadioOpt">
                    <input
                        type="checkbox"
                        name={ "checkbox_btn-" + id }
                        value={ opt }
                    />
                    { opt }
                </label>
            ))}
        </div>
    );
};

export const ShortText = ({id, required = false, title}) => {
    return (
        <div className="Field">
            <h3>
                { title }{ required ? "*" : "" }
            </h3>
            <input
                className="TextBox"
                type="text"
                name={ "short_text-" + id }
            />
        </div>
    );
};

export const DateText = ({id, required = false, title}) => {
    const [warnText, setWarnText] = React.useState('');

    const ValidateMMDD = (e) => {
        const regex = /^(|0?[123456789]|1[012])$/;
        setWarnText((regex.test(e.target.value)) ? "" : "Date is invalid");
    }
    const ValidateYYYY = (e) => {
        const regex = /^(|19\d{2}|20\d{2})$/;
        setWarnText((regex.test(e.target.value)) ? "" : "Date is invalid");
    }

    return (
        <div className="Field">
            <h3>
                { title }{ required ? "*" : "" }
            </h3>
            <div
                style={{
                    display: "inline-block",
                }}
            >
                <input
                    style={{ width: "30px" }}
                    className="TextBox"
                    type="text"
                    name={ "date_text_mm-" + id }
                    onChange={ValidateMMDD}
                />
                /
                <input
                    style={{ width: "30px" }}
                    className="TextBox"
                    type="text"
                    name={ "date_text_dd-" + id }
                    onChange={ValidateMMDD}
                />
                /
                <input
                    style={{ width: "60px" }}
                    className="TextBox"
                    type="text"
                    name={ "date_text_yyyy-" + id }
                    onChange={ValidateYYYY}
                />
            </div>
            <p className="FieldWarning">{ warnText }</p>
        </div>
    )
}