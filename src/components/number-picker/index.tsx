import { DetailedHTMLProps, InputHTMLAttributes, useCallback } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = Omit<InputProps, "value" | "onChange"> & {
  value?: number;
  onChange?: (value: number) => void;
};

export const NumberPicker = ({ onChange, ...props }: Props) => {
  const handleClick = useCallback(
    (type: "plus" | "minus") => {
      if (props.value === undefined) return;

      if (type === "plus") {
        onChange?.(props.value + 1);
        return;
      }

      onChange?.(props.value - 1);
    },
    [onChange, props.value]
  );

  return (
    <div className="bg-slate-50 p-1 flex gap-2 rounded">
      <button
        className="w-9 h-9 bg-slate-100 border-slate-200 rounded flex justify-center items-center"
        onClick={() => handleClick("minus")}
      >
        <FaMinus />
      </button>
      <input type="text" className="w-8 bg-slate-50 text-center outline-none" readOnly {...props} />
      <button
        className="w-9 h-9 bg-slate-100 border-slate-200 rounded flex justify-center items-center"
        onClick={() => handleClick("plus")}
      >
        <FaPlus />
      </button>
    </div>
  );
};
