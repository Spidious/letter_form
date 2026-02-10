import "./Fields.css";

export const MultiChoice = ({title, opts}) => {
    return (
        <div className="Field">
            <h3>
                { title }
            </h3>
            <form>
                <label>
                    <input
                        type="radio"
                        name="opt1"
                        value="test"
                    />
                    Testing Input Label
                </label>
            </form>
        </div>
    );
};

export const MultiSelect = ({title, opts}) => {
    return (
        <div className="Field">
            <h3>
                { title }
            </h3>
        </div>
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