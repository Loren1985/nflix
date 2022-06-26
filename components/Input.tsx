import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  error?: string;
  register?: UseFormRegister<FieldValues>;
  registerOptions?: any;
  mask?: string;
  as?: any;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = `text`,
  register = () => ({}),
  registerOptions,
  mask,
  as: As,
  ...props
}) => {
  return (
    <label
      className="ui-label ui-input-label reset-password-mop-input"
      id={`lbl-${name}`}
      placeholder={name}
    >
      <span className="ui-label-text">{label}</span>
      {As ? (
        <As mask={mask} {...register(name, registerOptions)}>
          {
            //@ts-ignore
            () => (
              <input
                className="ui-text-input"
                name={name}
                id={name}
                type={type}
                {...props}
                {...register(name, registerOptions)}
              />
            )
          }
        </As>
      ) : (
        <input
          className="ui-text-input"
          name={name}
          id={name}
          type={type}
          {...props}
          {...register(name, registerOptions)}
        />
      )}
    </label>
  );
};
