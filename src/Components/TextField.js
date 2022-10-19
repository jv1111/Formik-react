import { ErrorMessage, useField } from "formik"

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field);
    console.log(meta);
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input 
                className="form-control shadow-none"
                {...field} {...props}
                autoComplete="off"
            />
            <ErrorMessage name={field.name}/>
        </div>
    )
}