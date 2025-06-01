import type { LabelProps } from "../../types/LabelProps";

function Label({ htmlFor, className, children }: LabelProps) {
    return (
    <label
      htmlFor={htmlFor}
      className={className}
    >
      {children}
    </label>
  );
}

export default Label