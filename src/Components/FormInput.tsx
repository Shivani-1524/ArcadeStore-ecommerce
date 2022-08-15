import React from "react";

type FormProps = {
    labelFor: string;
    labelTitle: string;
    placeholderText: string;
    inputType: string;
    value: string;
}

type ComponentProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    props: FormProps;
    formErrors: FormErrorsType;
}
export interface FormErrorsType {
    firstName?: string, lastName?: string, email?: string, password?: string, tncChk?: string
}
export interface FormValuesType {
    firstName?: string; lastName?: string; email?: string; password?: string; tncChk?: boolean
}

const FormInput = ({ props, onChange, formErrors } : ComponentProps) => {
    const { labelFor, labelTitle, placeholderText, inputType, value } = props;
    return (
        <div className="mg-t-15">
            <label className="input-label sm-title" htmlFor={labelFor}>
                {labelTitle}
            </label>
            <input
                className="user-input"
                required
                type={inputType}
                placeholder={placeholderText}
                onChange={onChange}
                id={labelFor}
                name={labelFor}
                value={value}
            />
            {formErrors && <p className="mg-t-10 orange-txt">{formErrors[labelFor as keyof FormErrorsType]}</p>}
        </div>
    );
};

export { FormInput };
