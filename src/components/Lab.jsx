import React, { useState, useEffect } from "react";
import Section from "./Section";
import { client } from "../client";
import { PortableText } from "@portabletext/react";
// Du behöver en ny bild för denna sida, t.ex. en person vid en dator
import LabsImage from "../assets/coder.webp";

const Lab = () => {
  const [labs, setLabs] = useState(null);

  useEffect(() => {
    // Hämtar alla labbar och tips
    const query = '*[_type == "lab"] | order(_createdAt desc)';
    client
      .fetch(query)
      .then((data) => setLabs(data))
      .catch(console.error);
  }, []);

  // Funktion för att översätta kategorierna till svenska för UI:t
  const getCategoryLabel = (category) => {
    switch (category) {
      case "lab":
        return {
          text: "Teknisk Labb",
          color: "bg-blue-100 text-blue-800 border-blue-200",
        };
      case "tip":
        return {
          text: "Karriärtips",
          color:
            "bg-[var(--color-primary)] text-[var(--color-kompass-black)] border-[var(--color-primary-hover)]",
        };
      case "tool":
        return {
          text: "Verktygsguide",
          color: "bg-purple-100 text-purple-800 border-purple-200",
        };
      default:
        return {
          text: "Artikel",
          color: "bg-gray-100 text-gray-800 border-gray-200",
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#c0e1d2]">
      <Section
        headingLevel="h1"
        title="Labb-miljön"
        text="Teori är bra, men praktik är bäst. Här samlar vi guider för hur du bygger egna säkra miljöer, handfasta karriärtips och praktiska övningar för att vässa dina färdigheter."
        imageSrc={LabsImage}
        imageAlt="Illustration av labbmiljö"
        priority={true}
        imageWidth="500"
        imageHeight="500"
      />

      <div className="w-full px-6 pt-2 pb-12">
        <div className="max-w-5xl mx-auto">
          {labs === null ? (
            <p className="text-center py-10">Laddar innehåll...</p>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {labs.map((item) => {
                const categoryStyle = getCategoryLabel(item.category);

                return (
                  <article
                    key={item._id}
                    className="bg-[var(--color-offwhite)] p-8 rounded-md shadow-[4px_4px_0px_rgba(43,43,43,0.15)] flex flex-col"
                  >
                    {/* Header with Badges */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold border ${categoryStyle.color}`}
                      >
                        {categoryStyle.text}
                      </span>
                      {item.difficulty && (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200 capitalize">
                          Svårighetsgrad: {item.difficulty}
                        </span>
                      )}
                      {item.estimatedTime && (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-warning-red)] text-[var(--color-kompass-black)] border border-[var(--color-warning-red)] flex items-center gap-1">
                          {item.estimatedTime}
                        </span>
                      )}
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-[var(--color-kompass-black)]">
                      {item.title}
                    </h2>

                    {/* The "Why" - Introduction */}
                    <div className="mb-6 bg-[var(--color-light-red)] p-6 rounded border-l-4 border-[#dca4a4]">
                      <h3 className="font-bold text-lg mb-2">
                        Bakgrund & Koncept
                      </h3>
                      <p className="text-gray-800 leading-relaxed italic">
                        {item.introduction}
                      </p>
                    </div>

                    {/* Step-by-Step Content */}
                    {item.content && (
                      <div className="text-gray-800 leading-relaxed mb-8 prose prose-lg max-w-none">
                        <PortableText
                          value={item.content}
                          components={{
                            block: {
                              normal: ({ children }) => (
                                <p className="mb-4">{children}</p>
                              ),
                              h3: ({ children }) => (
                                <h3 className="text-xl font-bold mt-8 mb-4">
                                  {children}
                                </h3>
                              ),
                            },
                            list: {
                              bullet: ({ children }) => (
                                <ul className="list-disc pl-6 mb-6 space-y-2">
                                  {children}
                                </ul>
                              ),
                              number: ({ children }) => (
                                <ol className="list-decimal pl-6 mb-6 space-y-2">
                                  {children}
                                </ol>
                              ),
                            },
                          }}
                        />
                      </div>
                    )}

                    {/* Interview Tip */}
                    {item.interviewTip && (
                      <div className="mt-auto bg-[#c0e1d2]/30 p-6 rounded-md border-l-4 border-[#c0e1d2]">
                        <h4 className="font-bold text-xl text-[var(--color-kompass-black)] mb-2 flex items-center gap-2">
                          Intervjuvinkeln
                        </h4>
                        <p className="text-gray-800 leading-relaxed">
                          {item.interviewTip}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lab;
