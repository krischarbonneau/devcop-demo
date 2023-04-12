import ActionButton from "@/components/ActionButton";
import Collapse from "@/components/Collapse";
import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import { FC } from "react";

const Reusable: FC = () => {
  return (
    <Layout title="Reusable Components">
      <h1 className="text-black mx-1 mb-6 pb-1 font-extrabold font-mono text-4xl relative inline-block stroke-current">
        Reusable Components
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
      <div className="flex flex-col w-1/3 gap-4 mb-8">
        {/* Buttons without component */}
        <Collapse title="Buttons without using the component">
          <div className="pt-2 space-y-3">
            <button className="align-middle border font-mono inline-flex items-center justify-center shadow-sm disabled:cursor-not-allowed disabled:opacity-70 disabled:pointer-events-none disabled:shadow-none focus:ring-1 focus:ring-black focus:ring-offset-2 px-4 py-2.5 rounded-md text-lg border-gray-dark bg-gray-normal text-blue-light hover:bg-gray-dark hover:border-l-gray-deep hover:border-t-grasy-deep focus:bg-gray-dark focus:text-blue-light border-r-gray-500 border-b-gray-500">
              This is a button without using the component
            </button>
            <button className="align-middle border font-mono inline-flex items-center justify-center shadow-sm disabled:cursor-not-allowed disabled:opacity-70 disabled:pointer-events-none disabled:shadow-none focus:ring-1 focus:ring-black focus:ring-offset-2 px-4 py-2.5 rounded-md text-lg border-gray-dark bg-gray-normal text-blue-light hover:bg-gray-dark hover:border-l-gray-deep hover:border-t-grasy-deep focus:bg-gray-dark focus:text-blue-light border-r-gray-500 border-b-gray-500">
              This is also a button without using the component
            </button>
          </div>
        </Collapse>
        <hr />
        {/* Buttons with component*/}
        <Collapse title="Buttons using the component">
          <div className="pt-2 space-y-3">
            <ActionButton
              text="This is a button using the component"
              size="xs"
            />
            <ActionButton
              text="This is a button using the component"
              size="sm"
            />
            <ActionButton
              text="This is a button using the component"
              size="lg"
              style="primary"
            />
          </div>
        </Collapse>
      </div>

      <LinkButton text="Back to home page" href="/" />
    </Layout>
  );
};
export default Reusable;
