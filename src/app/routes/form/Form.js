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
                    opts={["1", "2", "3"]}
                />
                <MultiChoice
                    title={"This is another Multiple Choice"}
                    opts={["4", "5", "6"]}
                />
                <MultiSelect
                    title={"This is a Multiple Select"}
                    opts={["7", "8", "9"]}
                />
                <ShortText title={"This is a Short Answer"} />
            </div>
        </div>
    );
}