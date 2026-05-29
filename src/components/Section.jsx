// src/components/Section.jsx
import React from "react";

const Section = ({
  title,
  text,
  buttonText,
  onButtonClick,
  buttonStyle = "btn-primary",
  imageSrc,
  imageAlt,
  reverse = false,
  isSubpage = false,
  children,

  buttonLink,
}) => {
  return (
    <section
      className={`w-full bg-[#c0e1d2] px-6 pb-12 lg:pb-20 ${
        isSubpage ? "pt-32 lg:pt-40" : "pt-12 lg:pt-16"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto bg-[var(--color-offwhite)] rounded-md p-6 md:p-10 lg:p-12
          flex flex-col lg:items-center justify-between gap-8 lg:gap-12
          ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        style={{ boxShadow: "6px 6px 0px rgba(43, 43, 43, 0.2)" }}
      >
        <div className="w-full flex flex-col items-start">
          {title && <h2 className="mb-6 text-kompass-black">{title}</h2>}
          {text && <p className="leading-relaxed mb-6">{text}</p>}

          {children}

          {buttonText && (
            <>
              {buttonLink ? (
                <a
                  href={buttonLink}
                  className={`${buttonStyle} mt-6`}
                  target={buttonLink.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    buttonLink.startsWith("http") ? "noopener noreferrer" : ""
                  }
                >
                  {buttonText}
                </a>
              ) : (
                <button
                  className={`${buttonStyle} mt-6`}
                  onClick={onButtonClick}
                >
                  {buttonText}
                </button>
              )}
            </>
          )}
        </div>

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
