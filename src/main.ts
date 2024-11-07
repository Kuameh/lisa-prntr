import { PrintConfig, StyleRules } from "./types";

function generatePrintStyles(config: PrintConfig = {}): StyleRules {
  const {
    pageSize = "A4",
    margin = "20mm",
    bodyMargin = 0,
    bodyPadding = 0,
    selector = "[data-printable]",
    fontSize = "1em",
    hideSelectors = [],
    additionalStyles = {},
  } = config;

  const hideSelectorsStyles = hideSelectors.reduce<StyleRules>(
    (acc, selector) => ({
      ...acc,
      [selector]: {
        display: "none !important",
      },
    }),
    {}
  );

  return {
    "@page": {
      size: pageSize,
      margin: margin,
    },
    ":root": {
      "font-size": fontSize,
    },
    body: {
      margin: String(bodyMargin),
      padding: String(bodyPadding),
    },
    [`*:not(${selector}):not(${selector} *)`]: {
      visibility: "hidden",
    },
    [`${selector}, ${selector} *`]: {
      visibility: "visible",
    },
    ...hideSelectorsStyles,
    ...additionalStyles,
  };
}

function insertPrintStyles(config?: PrintConfig): HTMLStyleElement {
  if (typeof document === "undefined") {
    throw new Error("Document is not defined");
  }

  const existingStyle = document.querySelector("style[data-lisa-prntr]");
  if (existingStyle) {
    existingStyle.remove();
  }

  const styleElement = document.createElement("style");
  styleElement.setAttribute("data-lisa-prntr", "");
  const styles = generatePrintStyles(config);

  styleElement.textContent = `
    @media print {
      ${Object.entries(styles)
        .map(
          ([selector, rules]) =>
            `${selector} { ${Object.entries(rules)
              .map(([prop, value]) => `${prop}: ${value}`)
              .join(";")} }`
        )
        .join("\n")}
    }
  `;

  document.head.appendChild(styleElement);
  return styleElement;
}

export function lisaPrntr(config: PrintConfig = {}): HTMLStyleElement {
  return insertPrintStyles(config);
}

if (typeof document !== "undefined") {
  lisaPrntr();
}
