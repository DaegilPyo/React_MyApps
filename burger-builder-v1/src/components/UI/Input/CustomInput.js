import React from 'react';
import classes from './CustomInput.module.css';
const customInput = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (!props.isValid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case ('input'):
            inputElement =
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case ('select'):
            inputElement =
                <select onChange={props.changed}
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value} >
                    {props.elementConfig.options.map(opt =>
                    (
                        <option
                            key={opt.value}
                            value={opt.value}>
                            {opt.displayValue} </option>
                    )
                    )} </select>
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')}{...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default customInput;