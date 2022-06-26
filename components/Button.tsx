import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  ...props
}) => {
  return (
    <div className="btn-bar" data-uia="btn-submit">
      <button
        className={`btn ${disabled ? `disabled` : ``} btn-blue btn-small`}
        type="button"
        disabled={disabled}
        {...props}
      >
        {label}
      </button>
      {/* <button
        className="btn btn-plain btn-small"
        type="button"
        autocomplete="off"
        tabindex="0"
        data-uia="cancelFind"
      >
        Cancel
      </button> */}
    </div>
  );
};
