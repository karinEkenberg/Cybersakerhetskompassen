import React from "react";

// We pass props into the component to make it a dynamic template
const Section = ({
  title,
  text,
  buttonText,
  onButtonClick,
  buttonStyle = "btn-primary",
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    /* Outer section wrapper */
    <section className="w-full bg-[#c0e1d2] px-6 py-12 lg:py-20">
      {/* Dynamic layout container that flips side based on the 'reverse' prop */}
      <div
        className={`max-w-5xl mx-auto bg-[var(--color-offwhite)] rounded-md p-6 md:p-10 lg:p-12
          flex flex-col lg:items-center justify-between gap-8 lg:gap-12
          ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        style={{ boxShadow: "6px 6px 0px rgba(43, 43, 43, 0.2)" }}
      >
        {/* Content column (Title, Text, Button) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {title && <h2 className="mb-6 text-kompass-black">{title}</h2>}
          {text && <p className="text-gray-800 leading-relaxed mb-8">{text}</p>}

          {/* Only renders the button if buttonText is provided */}
          {buttonText && (
            <button className={buttonStyle} onClick={onButtonClick}>
              {buttonText}
            </button>
          )}
        </div>

        {/* Image column */}
        {imageSrc && (
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt={imageAlt || "Section illustration"}
              className="w-full max-w-md lg:max-w-none h-auto rounded object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
