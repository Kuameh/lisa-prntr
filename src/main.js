function generatePrintStyles(config = {}) {
  const {
    pageSize = "A4",
    margin = "20mm",
    bodyMargin = 0,
    bodyPadding = 0,
    selector = "[data-printable]",
    fontSize = "1em",
    hideSelectors = [],
    additionalStyles = {}
  } = config;

  const hideSelectorsStyles = hideSelectors.reduce((acc, selector) => ({
    ...acc,
    [selector]: {
      display: 'none !important'
    }
  }), {});

  return {
    "@page": {
      size: pageSize,
      margin: margin,
    },
    ":root": {
      "font-size": fontSize,
    },
    "body": {
      margin: bodyMargin,
      padding: bodyPadding,
    },
    [`*:not(${selector}):not(${selector} *)`]: {
      visibility: "hidden"
    },
    [`${selector}, ${selector} *`]: {
      visibility: "visible"
    },
    ...hideSelectorsStyles,
    ...additionalStyles
  };
}

// Function to insert styles
function insertPrintStyles(config) {
  // Remove existing lisa-prntr styles if they exist
  const existingStyle = document.querySelector('style[data-lisa-prntr]');
  if (existingStyle) {
    existingStyle.remove();
  }

  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-lisa-prntr', '');
  const styles = generatePrintStyles(config);
  
  styleElement.textContent = `
    @media print {
      ${Object.entries(styles).map(([selector, rules]) => 
        `${selector} { ${Object.entries(rules).map(([prop, value]) => 
          `${prop}: ${value}`
        ).join(';')} }`
      ).join('\n')}
    }
  `;
  
  if (typeof document !== 'undefined') {
    document.head.appendChild(styleElement);
  }

  return styleElement;
}

// Export the main function that can be called with config
export function lisaPrntr(config = {}) {
  return insertPrintStyles(config);
}

// Apply default styles immediately if in browser
if (typeof document !== 'undefined') {
  lisaPrntr();
}