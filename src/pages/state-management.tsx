import InputField from "@/components/InputField";
import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import { ChangeEventHandler, FC, useCallback, useRef } from "react";
import { useState } from "react";

const StateManagement: FC = () => {
  const [name, setName] = useState("");
  const count = useRef(0);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      setName(target.value);
      count.current = count.current + 1;
    },
    [setName]
  );
  return (
    <Layout title="State Management">
      <h1 className="text-black mx-1 mb-6 pb-1 font-extrabold font-mono text-4xl relative inline-block stroke-current">
        State Management
        <svg
          className="absolute -bottom-0.5 w-full max-h-1.5"
          viewBox="0 0 55 5"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
            strokeWidth="2"
          ></path>
        </svg>
      </h1>
      <div className="flex flex-col w-1/3 gap-4 mb-8 text-black font-mono">
        <p>The current name is: {name}</p>
        <p>
          The number of times something has been entered into the input field:{" "}
          {count.current}{" "}
        </p>
        <InputField
          id="user"
          name="user"
          label="Name"
          helpMessage="Start typing a name here to see the state update in real time"
          value={name}
          required
          onChange={handleOnChange}
        />
      </div>

      <LinkButton text="Back to home page" href="/" />
    </Layout>
  );
};
export default StateManagement;
