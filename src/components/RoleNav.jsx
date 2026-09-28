import React, { useState, useEffect } from "react";
import { client } from "../client";

const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-åäö]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const RoleNav = ({ title = "Utforska roller", targetPrefix = "" }) => {
  const [roles, setRoles] = useState(null);

  useEffect(() => {
    const query = '*[_type == "role"] | order(title asc) {_id, title}';
    client
      .fetch(query)
      .then((data) => setRoles(data))
      .catch((error) => console.error("Kunde inte hämta roller:", error));
  }, []);

  if (!roles || roles.length === 0) {
    return null;
  }

  return (
    <div
      className="w-full max-w-5xl mx-auto bg-[var(--color-offwhite)] rounded-md p-6 md:p-8"
      style={{ boxShadow: "6px 6px 0px rgba(43, 43, 43, 0.2)" }}
    >
      <h2 className="text-xl font-bold mb-6 text-kompass-black">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {roles.map((role) => (
          <a
            key={`nav-${role._id}`}
            href={`${targetPrefix}#${slugify(role.title)}`}
            className="bg-[var(--color-offwhite)] border-2 border-[var(--color-primary-hover)] text-gray-800 rounded-md py-2 px-4 font-medium transition-all duration-200 hover:border-[var(--color-warning-red)] cursor-pointer block text-sm md:text-base [overflow-wrap:anywhere] [word-break:break-word] hyphens-auto"
          >
            {role.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RoleNav;
