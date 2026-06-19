import React from "react";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";

const Section = ({
  title,
  text,
  buttonText,
  onButtonClick,
  buttonStyle = "btn-primary",
  imageSrc,
  imageAlt,
  reverse = false,
  children,
  buttonLink,
  headingLevel = "h2",
  imageWidth = "500",
  imageHeight = "500",
  priority = false,
  isCard = false,
}) => {
  const HeadingTag = headingLevel;

  const content = (
    <div
      className={`max-w-5xl mx-auto bg-[var(--color-offwhite)] rounded-md p-6 md:p-10 lg:p-12 flex flex-col justify-between gap-8 lg:gap-12 w-full ${
        isCard ? "lg:items-start" : "lg:items-center"
      } ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      style={{ boxShadow: "6px 6px 0px rgba(43, 43, 43, 0.2)" }}
    >
      <div className="w-full flex flex-col items-start">
        {title && (
          <HeadingTag className="mb-6 text-kompass-black">{title}</HeadingTag>
        )}

        {text && (
          <div className="mb-6 w-full text-gray-800">
            {typeof text === "string" ? (
              <p className="leading-relaxed">{text}</p>
            ) : (
              <PortableText
                value={text}
                components={{
                  block: {
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold mt-6 mb-2 text-kompass-black">
                        {children}
                      </h3>
                    ),
                    normal: ({ children }) => (
                      <p className="leading-relaxed mb-4">{children}</p>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-800">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal pl-5 mb-4 space-y-2 text-gray-800">
                        {children}
                      </ol>
                    ),
                  },
                }}
              />
            )}
          </div>
        )}

        {children}

        {buttonText && (
          <>
            {buttonLink ? (
              buttonLink.startsWith("http") ? (
                <a
                  href={buttonLink}
                  className={`${buttonStyle} mt-6 block w-fit`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {buttonText}
                </a>
              ) : (
                <Link
                  to={buttonLink}
                  className={`${buttonStyle} mt-6 block w-fit`}
                >
                  {buttonText}
                </Link>
              )
            ) : (
              <button className={`${buttonStyle} mt-6`} onClick={onButtonClick}>
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
            width={imageWidth}
            height={imageHeight}
            fetchpriority={priority ? "high" : "auto"}
            loading={priority ? undefined : "lazy"}
            className="w-full max-w-md lg:max-w-none rounded object-cover"
            style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
          />
        </div>
      )}
    </div>
  );

  if (isCard) {
    return content;
  }

  return (
    <section className="w-full bg-[#c0e1d2] px-6 py-4 lg:py-6 first-of-type:pt-10 lg:first-of-type:pt-14 last-of-type:pb-10 lg:last-of-type:pb-14">
      {content}
    </section>
  );
};

export default Section;
