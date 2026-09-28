import React, { useState } from "react";
import { PortableText } from "@portabletext/react";

const InteractiveRoadmap = ({ title, steps }) => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <>
      <div
        className="w-full max-w-5xl mx-auto bg-[var(--color-offwhite)] rounded-md p-6 md:p-8 lg:p-10 relative"
        style={{ boxShadow: "6px 6px 0px rgba(43, 43, 43, 0.2)" }}
      >
        {title && (
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 text-kompass-black">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {steps &&
            steps.map((step, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedStep(step)}
                className="bg-[#dca4a4] hover:bg-[#c98e8e] cursor-pointer transition-colors duration-200 rounded-md py-6 px-4 flex justify-center items-center text-kompass-black font-medium text-center text-sm md:text-base"
                style={{ boxShadow: "4px 4px 0px rgba(43, 43, 43, 0.15)" }}
              >
                {step.stepTitle}
              </button>
            ))}
        </div>
      </div>

      {selectedStep && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#c0e1d2]/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelectedStep(null)}
        >
          <div
            className="bg-[var(--color-offwhite)] w-full max-w-lg rounded-md p-8 relative shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedStep(null)}
              className="absolute top-2 right-2 p-4 text-gray-500 hover:text-black text-3xl leading-none flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Stäng rutan"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 pr-8 text-kompass-black">
              {selectedStep.stepTitle}
            </h3>

            <div className="text-gray-800 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {selectedStep.content ? (
                <PortableText
                  value={selectedStep.content}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="mb-4">{children}</p>
                      ),
                      h4: ({ children }) => (
                        <h4 className="font-bold mt-4 mb-2">{children}</h4>
                      ),
                    },
                  }}
                />
              ) : (
                <p>Ingen information tillgänglig för detta steg ännu.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveRoadmap;
