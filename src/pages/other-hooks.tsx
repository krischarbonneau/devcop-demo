import ActionButton from "@/components/ActionButton";
import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import { FC, useCallback, useEffect, useState } from "react";

const OtherHooks: FC = () => {
  var randomstring = require("randomstring");

  const [title, setTitle] = useState("Other Hooks");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleOnClick = useCallback(
    () => setTitle(randomstring.generate()),
    [randomstring]
  );

  return (
    <Layout title="Other Hooks">
      <h1 className="text-black mx-1 mb-6 pb-1 font-extrabold font-mono text-4xl relative inline-block stroke-current">
        Other Hooks
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
      <div className="flex flex-col w-1/3 gap-4 mb-8 font-mono text-black">
        <p>
          The{" "}
          <span className="highlight-container">
            <span className="highlight">useEffect</span>
          </span>{" "}
          hook is one of the other most commonly used hooks and is used to
          perform side effects in your pages/components such as fetching data,
          updating the DOM, and timers. If using, be sure to set dependencies or
          you may run the risk of having infinite renders!
        </p>
        <h2 className="font-bold text-xl">
          What is the difference between{" "}
          <span className="highlight-container">
            <span className="highlight">useEffect</span>
          </span>{" "}
          and{" "}
          <span className="highlight-container">
            <span className="highlight">useCallback</span>
          </span>
          ?
        </h2>
        <p>
          Both have the ability to do something after a dependency change, so
          how do they differ? When a function is memoized with{" "}
          <span className="highlight-container">
            <span className="highlight">useCallback</span>
          </span>
          , it is only recreated when the dependencies passed to the hook
          change. This can improve performance in cases where a function is
          passed down as a prop to a child component, as it ensures that the
          child component only re-renders when necessary. On the other hand,
          <span className="highlight-container">
            <span className="highlight">useEffect</span>
          </span>{" "}
          is used to manage side effects, such as fetching data, updating the
          DOM, or setting up event listeners. It allows you to perform these
          actions after the component has been rendered, and can also clean up
          any resources that were used by the side effect.
        </p>

        <ActionButton
          text="Click me to change the title of the page!"
          onClick={handleOnClick}
        />
      </div>

      <LinkButton text="Back to home page" href="/" />
    </Layout>
  );
};
export default OtherHooks;
