import React, { useState } from "react";
import { PortableText } from "@portabletext/react";

const InteractiveRoadmap = ({ title, steps }) => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <>
      <div
        lang="sv"
        className="w-full max-w-5xl mx-auto bg-[var(--color-offwhite)] rounded-md p-6 md:p-8 lg:p-10 relative"
        style={{ boxShadow: "6px 6px 0px rgba(43, 43, 43, 0.2)" }}
      >
        {title && (
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 text-kompass-black [overflow-wrap:anywhere] [word-break:break-word] hyphens-auto">
            {title}
          </h2>
        )}

        {/* 1 kolumn på mobil, 2 på små skärmar (sm), 3 på tablet (md) och 5 på desktop (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {steps &&
            steps.map((step, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedStep(step)}
                className="w-full bg-[#dca4a4] hover:bg-[#c98e8e] cursor-pointer transition-colors duration-200 rounded-md py-4 px-4 md:py-6 flex justify-center items-center text-kompass-black font-medium text-center text-sm md:text-base min-w-0 leading-snug [overflow-wrap:anywhere] [word-break:break-word] hyphens-auto"
                style={{
                  boxShadow: "4px 4px 0px rgba(43, 43, 43, 0.15)",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                {step.stepTitle}
              </button>
            ))}
        </div>
      </div>

      {selectedStep && (
        <div
          lang="sv"
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

            <h3
              className="text-2xl font-bold mb-4 pr-8 text-kompass-black [overflow-wrap:anywhere] [word-break:break-word] hyphens-auto"
              style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
            >
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
