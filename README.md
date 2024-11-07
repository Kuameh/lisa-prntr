# Lisa Prntr

A lightweight, zero-dependency TypeScript library for controlling print layouts in web applications. Lisa Prntr makes it easy to define which elements should be printed, customize page settings, and manage print-specific styles.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install Lisa Prntr using npm:
```bash
npm install lisa-prntr
```

Or using yarn:
```bash
yarn add lisa-prntr
```

## Usage

### Basic Usage

1. Import the package:
```typescript
import { lisaPrntr } from 'lisa-prntr';
```

2. Add the `data-printable` attribute to elements you want to print:
```html
<div data-printable>
  <h1>This will be printed</h1>
  <p>This content will also be printed</p>
</div>

<div>
  <p>This content will be hidden during printing</p>
</div>
```

3. Initialize Lisa Prntr:
```typescript
// Use default settings
lisaPrntr();

// Or with custom configuration
lisaPrntr({
  pageSize: 'A4',
  margin: '15mm',
  fontSize: '12pt'
});
```

## Features

- 🎯 Selective printing using data attributes
- 📏 Customizable page sizes and margins
- 🎨 Custom print-specific styles
- 🚫 Hide specific elements during printing
- 📱 Responsive print layouts
- 💡 Zero dependencies

## API Reference

### Configuration Options

The `lisaPrntr` function accepts a configuration object with the following properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| pageSize | string | 'A4' | Sets the page size for printing |
| margin | string | '20mm' | Sets the page margins |
| bodyMargin | number \| string | 0 | Sets the margin for the body element |
| bodyPadding | number \| string | 0 | Sets the padding for the body element |
| selector | string | '[data-printable]' | Defines the selector for printable elements |
| fontSize | string | '1em' | Sets the font size for printed content |
| hideSelectors | string[] | - | Array of selectors to hide during printing |
| additionalStyles | Record<string, Record<string, string>> | - | Additional custom styles for printing |

## Examples

### Basic Example
```typescript
lisaPrntr({
  pageSize: 'A4',
  margin: '20mm',
  fontSize: '12pt'
});
```

### Custom Selectors
```typescript
lisaPrntr({
  selector: '.printable-content',
  hideSelectors: ['.no-print', '#navigation']
});
```

### Advanced Styling
```typescript
lisaPrntr({
  additionalStyles: {
    '.custom-header': {
      'font-size': '24pt',
      'color': '#333333'
    },
    '.page-break': {
      'page-break-before': 'always'
    }
  }
});
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/kuameh/lisa-prntr.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build the package:
```bash
npm run build
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the package
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run types` - Generate TypeScript declarations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Keep PR scope focused and specific

## License
> When I wrote this, only God and I understood what I was doing. <br>
> Now, only God knows.

[MIT License](LICENSE)