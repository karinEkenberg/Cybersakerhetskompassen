import React, { useState, useEffect } from "react";
import Section from "./Section";
import { client } from "../client";
import { PortableText } from "@portabletext/react";
// Adjust the path and filename to match your actual image
import BooksImage from "../assets/books.webp";

const Lexicon = () => {
  const [terms, setTerms] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all terms ordered alphabetically
    const query =
      '*[_type == "lexicon"] | order(term asc) { _id, term, abbreviation, definition }';

    client
      .fetch(query)
      .then((data) => {
        setTerms(data);
      })
      .catch((error) => console.error("Error fetching lexicon terms:", error));
  }, []);

  // Local filter for performance and reduced server requests
  const filteredTerms = terms?.filter((item) => {
    const matchesTerm = item.term
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesAbbreviation = item.abbreviation
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTerm || matchesAbbreviation;
  });

  return (
    <div className="min-h-screen">
      <Section
        headingLevel="h1"
        title="Cyber Lexikon"
        text="IT-säkerhet är fullt av akronymer, tekniska termer och komplexa principer. I vårt lexikon rätas frågetecknen ut. Här bryts svåra teoretiska koncept och säkerhetsbegrepp ner till enkla, pedagogiska förklaringar så att en lätt kan förstå helhetsbilden."
        imageSrc={BooksImage}
        imageAlt="En person som lutar sig mot en trave böcker"
        priority={true}
        imageWidth="500"
        imageHeight="500"
      />

      <div className="max-w-5xl mx-auto px-6 pt-2 pb-24 lg:pb-32">
        <div
          className="mb-10 bg-[var(--color-offwhite)] rounded-md"
          style={{ boxShadow: "4px 4px 0px rgba(43, 43, 43, 0.15)" }}
        >
          <input
            type="text"
            placeholder="Sök efter en term eller akronym (t.ex. MFA)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#dca4a4] shadow-sm text-lg"
          />
        </div>

        {terms === null ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-700 text-lg">Laddar lexikon...</p>
          </div>
        ) : (
          /* Replaced space-y-6 with CSS Grid for responsive 50% width cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((item) => (
                <article
                  key={item._id}
                  className="bg-[var(--color-offwhite)] rounded-md p-6 md:p-8 flex flex-col"
                  style={{ boxShadow: "4px 4px 0px rgba(43, 43, 43, 0.15)" }}
                >
                  <h2 className="text-2xl font-bold text-kompass-black mb-2 flex items-baseline gap-3">
                    {item.term}
                    {item.abbreviation && (
                      <span className="text-lg font-normal text-gray-500">
                        ({item.abbreviation})
                      </span>
                    )}
                  </h2>
                  <div className="text-gray-800 leading-relaxed flex-grow">
                    <PortableText value={item.definition} />
                  </div>
                </article>
              ))
            ) : (
              <p className="text-center text-gray-700 text-lg py-10 md:col-span-2">
                Inga termer matchade din sökning.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lexicon;
