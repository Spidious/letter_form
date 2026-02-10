import { MultiChoice, MultiSelect, ShortText } from "../../../components/fields/Fields"
import "./Form.css";


export default function Form() {
    return (
        <div className="form-background container-flex">
            <div className="form-wrapper container-flex">
                <h1>
                    {/* Form title */}
                    March
                </h1>
                {/*  Form queries added here  */}
                <MultiChoice
                    title={"This is a Multiple Choice"}
                />
                <MultiSelect
                    title={"This is a Multiple Select"}
                />
                <ShortText title={"This is a Short Answer"} />
            </div>
        </div>
    );
}