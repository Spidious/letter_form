import { MultiChoice, ShortText, DateText } from "../../../components/fields/Fields"
import "./Form.css";


export default function Form() {
    return (
        <div className="form-background container-flex">
            <form className="form-wrapper container-flex">
                <h1>
                    {/* Form title */}
                    March
                </h1>
                <MultiChoice
                    id={1}
                    required={true}
                    title="What would you prefer to receive?"
                    opts={[
                        "Just the letter",
                        "The whole package",
                    ]}
                />
                <MultiChoice
                    id={2}
                    required={true}
                    title="Who do you think would win?"
                    opts={[
                        "Shadow the hedgehog",
                        "1000 normal hedgehogs",
                    ]}
                />
                <ShortText
                    id={3}
                    title="Any life updates you want included?"
                />
                <DateText
                    id={4}
                    required={true}
                    title="When is your birthday?"
                />
                <ShortText
                    id={5}
                    title="Anything else I should know?"
                />
            </form>
        </div>
    );
}