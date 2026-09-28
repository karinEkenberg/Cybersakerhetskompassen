import React, { useState, useEffect } from "react";
import Section from "./Section";
import { client } from "../client";
import { PortableText } from "@portabletext/react";
import BooksImage from "../assets/books.webp";

const Lexicon = () => {
  const [terms, setTerms] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    const query = `*[_type == "lexicon"] | order(term asc) {
      _id,
      term,
      abbreviation,
      definition,
      "category": category->title
    }`;

    client
      .fetch(query)
      .then((data) => {
        setTerms(data);
        const initialOpen = {};
        data?.forEach((item) => {
          const cat = item.category || "Okategoriserat";
          initialOpen[cat] = true;
        });
        setOpenCategories(initialOpen);
      })
      .catch((error) => console.error(error));
  }, []);

  // Fäller automatiskt ut relevanta kategorier när en söker, utan att låsa knapparna
  useEffect(() => {
    if (!terms) return;
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      const matchingCats = {};
      terms.forEach((item) => {
        const match =
          item.term?.toLowerCase().includes(searchLower) ||
          item.abbreviation?.toLowerCase().includes(searchLower);
        if (match) {
          const cat = item.category || "Okategoriserat";
          matchingCats[cat] = true;
        }
      });
      setOpenCategories(matchingCats);
    }
  }, [searchTerm, terms]);

  const toggleCategory = (cat) => {
    setOpenCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const filteredTerms = terms?.filter((item) => {
    const termMatch = item.term
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const abbrMatch = item.abbreviation
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    return termMatch || abbrMatch;
  });

  const groupedTerms = filteredTerms?.reduce((acc, item) => {
    const cat = item.category || "Okategoriserat";
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(item);
    return acc;
  }, {});

  const categories = groupedTerms ? Object.keys(groupedTerms).sort() : [];

  return (
    <div className="min-h-screen">
      <Section
        headingLevel="h1"
        title="Cyber Lexikon"
        text="IT-säkerhet är fullt av akronymer, tekniska termer och komplexa principer. I vårt lexikon rätas frågetecknen ut. Här bryts svåra teoretiska koncept och säkerhetsbegrepp ner till enkla, pedagogiska förklaringar så att en lätt kan förstå helhetsbilden."
        imageSrc={BooksImage}
        imageAlt="En person som lutar sig mot en trave böcker"
        priority={true}
        imageWidth="296"
        imageHeight="296"
      />

      <div className="w-full px-6 pt-2 pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Sökfält */}
          <div
            className="mb-10 bg-[var(--color-offwhite)] rounded-md"
            style={{ boxShadow: "4px 4px 0px rgba(43, 43, 43, 0.15)" }}
          >
            <input
              type="text"
              placeholder="Sök efter en term eller akronym (t.ex. MFA)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dca4a4] shadow-sm text-lg bg-transparent text-[var(--color-kompass-black)] placeholder-gray-800"
            />
          </div>

          {terms === null ? (
            <div className="flex justify-center items-center py-20">
              <p className="text-gray-800 text-lg">Laddar lexikon...</p>
            </div>
          ) : categories.length === 0 ? (
            <p className="text-center text-gray-800 text-lg py-10">
              Inga termer matchade din sökning.
            </p>
          ) : (
            <div className="space-y-8">
              {categories.map((category) => {
                const isOpen = !!openCategories[category];

                return (
                  <div
                    key={category}
                    className="border border-gray-300 rounded-md overflow-hidden bg-[var(--color-offwhite)]"
                    style={{ boxShadow: "4px 4px 0px rgba(43, 43, 43, 0.15)" }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleCategory(category)}
                      className="w-full p-5 md:p-6 flex justify-between items-center text-left bg-[var(--color-offwhite)] hover:bg-[#c0e1d2]/20 transition-colors"
                    >
                      <div className="flex items-baseline gap-3">
                        <h2 className="text-xl md:text-2xl font-bold text-[var(--color-kompass-black)]">
                          {category}
                        </h2>
                        <span className="text-sm font-medium text-gray-600">
                          ({groupedTerms[category].length}{" "}
                          {groupedTerms[category].length === 1
                            ? "term"
                            : "termer"}
                          )
                        </span>
                      </div>

                      <svg
                        className={`w-6 h-6 text-[var(--color-kompass-black)] transform transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="p-6 md:p-8 border-t border-gray-200 bg-[#c0e1d2]/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                          {groupedTerms[category].map((item) => (
                            <article
                              key={item._id}
                              className="bg-[var(--color-offwhite)] rounded-md p-6 flex flex-col border border-gray-200"
                              style={{
                                boxShadow: "2px 2px 0px rgba(43, 43, 43, 0.1)",
                              }}
                            >
                              <h3 className="text-xl font-bold text-[var(--color-kompass-black)] mb-2 flex items-baseline gap-2">
                                {item.term}
                                {item.abbreviation && (
                                  <span className="text-base font-normal text-gray-700">
                                    ({item.abbreviation})
                                  </span>
                                )}
                              </h3>
                              <div className="text-gray-800 leading-relaxed flex-grow text-sm md:text-base">
                                <PortableText
                                  value={item.definition}
                                  components={{
                                    block: {
                                      normal: ({ children }) => (
                                        <p className="mb-3 last:mb-0">
                                          {children}
                                        </p>
                                      ),
                                      h3: ({ children }) => (
                                        <h4 className="text-lg font-bold mt-4 mb-2 text-[var(--color-kompass-black)]">
                                          {children}
                                        </h4>
                                      ),
                                    },
                                    marks: {
                                      strong: ({ children }) => (
                                        <strong className="font-bold text-[var(--color-kompass-black)]">
                                          {children}
                                        </strong>
                                      ),
                                    },
                                  }}
                                />
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lexicon;
