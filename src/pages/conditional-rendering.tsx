import Modal from "@/components/Modal";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { FC, useState, useCallback } from "react";
import ActionButton from "@/components/ActionButton";

const ConditionalRendering: FC = () => {
  //Modal related
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleOnGoBackClick = useCallback(() => setModalOpen(true), []);

  const handleOnModalClose = useCallback(() => setModalOpen(false), []);

  const handleOnModalYesButtonClick = useCallback(
    () => router.push("/"),
    [router]
  );

  //Conditionally rendered text related
  const [isRendered, setIsRendered] = useState(false);

  const handleOnRenderButtonClick = useCallback(
    () => setIsRendered(!isRendered),
    [isRendered]
  );

  return (
    <Layout title="Conditional Rendering">
      <h1 className="text-black mx-1 mb-6 pb-1 font-extrabold font-mono text-4xl relative inline-block stroke-current">
        Conditional Rendering
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
      <div className="flex flex-col w-1/3 gap-4 mb-4 font-mono text-black">
        <p>
          This page demonstrates how you can manipulate what is rendered based
          on a provided condition (ie. a boolean prop, a variable controlled via{" "}
          <span className="highlight-container">
            <span className="highlight">useState</span>
          </span>{" "}
          or{" "}
          <span className="highlight-container">
            <span className="highlight">useRef</span>
          </span>{" "}
          or even a ternary).
        </p>
        {/* && is a short circuit evaluator, meaning everything after the operator is ignored if the condition is false.
            You can also do something like this: 
            {isRendered ? (
              <p>This text is rendered if true</p>
            ) : (
              <p>This text is rendered if false</p>
            )} 
        */}
        {isRendered && (
          <p className="text-red-500">
            This element is only rendered if isRendered is true!
          </p>
        )}
      </div>
      <div className="mb-8">
        <ActionButton
          text={!isRendered ? "Click to render text" : "Click to hide text"}
          onClick={handleOnRenderButtonClick}
        />
      </div>

      <Modal
        open={modalOpen}
        onClose={handleOnModalClose}
        actionButtons={[
          {
            text: "Yes",
            onClick: handleOnModalYesButtonClick,
            style: "primary",
          },
          {
            text: "No",
            onClick: handleOnModalClose,
          },
        ]}
        header="This is a conditionally rendered modal"
      >
        <p>Would you like to go back to the home page?</p>
      </Modal>
      <ActionButton text="Back to home page" onClick={handleOnGoBackClick} />
    </Layout>
  );
};
export default ConditionalRendering;
