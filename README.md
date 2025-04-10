# [React Slideshow](https://teneplaysofficial.github.io/react-slideshow/?path=/docs/image-slideshow-demo--docs)

<div class="badge-wrapper">

[![npm](https://img.shields.io/npm/v/@tenedev/react-slideshow?color=blue&label=NPM&logo=npm&style=flat-square)](https://www.npmjs.com/package/@tenedev/react-slideshow)
[![downloads](https://img.shields.io/npm/dt/@tenedev/react-slideshow?color=blue&label=Downloads&logo=archive&style=flat-square)](https://www.npmjs.com/package/@tenedev/react-slideshow)
![size](https://img.shields.io/bundlephobia/minzip/@tenedev/react-slideshow?style=flat-square&label=Size&logo=webpack&color=blue)
![maintenance](https://img.shields.io/maintenance/active/2025?style=flat-square&label=Maintained&logo=calendar&color=blue)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16-blue?logo=node.js&style=flat-square)
[![Storybook](https://img.shields.io/badge/Storybook-Live%20Docs-blue?logo=storybook&style=flat-square)](https://teneplaysofficial.github.io/react-slideshow/?path=/docs/introduction--docs)
[![contribute](https://img.shields.io/badge/Contribute-Open%20PRs-blue?style=flat-square&logo=git)](https://github.com/TenEplaysOfficial/react-slideshow/pulls)
[![stars](https://img.shields.io/github/stars/TenEplaysOfficial/react-slideshow?style=flat-square&label=Stars&logo=github)](https://github.com/TenEplaysOfficial/react-slideshow)
![forks](https://img.shields.io/github/forks/TenEplaysOfficial/react-slideshow?style=flat-square&label=Forks&logo=github)
[![issues](https://img.shields.io/github/issues/TenEplaysOfficial/react-slideshow?style=flat-square&label=Issues&logo=github&color=blue)](https://github.com/TenEplaysOfficial/react-slideshow/issues)
[![last commit](https://img.shields.io/github/last-commit/TenEplaysOfficial/react-slideshow?style=flat-square&label=Last%20Commit&logo=github&color=blue)](https://github.com/TenEplaysOfficial/react-slideshow)
![workflow](https://img.shields.io/github/actions/workflow/status/TenEplaysOfficial/react-slideshow/publish.yml?style=flat-square&label=Build&logo=githubactions&color=blue)
![license](https://img.shields.io/github/license/TenEplaysOfficial/react-slideshow?style=flat-square&label=License&logo=open-source-initiative&color=blue)

</div>

A lightweight, customizable, and responsive slideshow component for React. Supports auto image switching, infinite looping, custom navigation buttons, and flexible styling positions. Perfect for modern React applications that need a smooth and clean slideshow experience.

## 🗂️ Table of Contents

- [🚀 Installation](#-installation)
- [📦 Usage](#-usage)
- [⚙️ Props](#️-props)
- [🎨 Customization](#-customization)
  - [Custom Buttons](#custom-buttons)
- [📘 Example](#-example)
- [🛠️ Contributing](#️-contributing)
- [📜 License](#-license)

## 🚀 Installation

```bash
npm install @tenedev/react-slideshow
# or
yarn add @tenedev/react-slideshow
```

## 📦 Usage

```tsx
import React from 'react';
import Slide from '@tenedev/react-slideshow';
// or
import { Slide } from '@tenedev/react-slideshow';

const images = [
  'https://source.unsplash.com/random/800x400?sig=1',
  'https://source.unsplash.com/random/800x400?sig=2',
  'https://source.unsplash.com/random/800x400?sig=3',
];

export default function App() {
  return (
    <Slide
      images={images}
      duration={3000}
      autoSwitch
      infiniteLoop
      buttonPosition="overlay"
      showIndicators
      pauseOnHover
      animation="slide"
      onSlideChange={(i) => console.log('Slide:', i)}
    />
  );
}
```

## ⚙️ Props

| Prop                 | Type                                                                | Default                 | Description                                   |
| -------------------- | ------------------------------------------------------------------- | ----------------------- | --------------------------------------------- |
| `images`             | `Array<string \| { url: string; alt?: string }>`                    | **Required**            | Array of image URLs or objects with alt text. |
| `duration`           | `number`                                                            | `3000`                  | Time (ms) between auto transitions.           |
| `autoSwitch`         | `boolean`                                                           | `true`                  | Enable auto switching between slides.         |
| `infiniteLoop`       | `boolean`                                                           | `true`                  | Loop slideshow infinitely.                    |
| `animation`          | `"slide"` \| `"fade"`                                               | `"slide"`               | Transition type.                              |
| `onSlideChange`      | `(index: number) => void`                                           | `undefined`             | Callback on slide change.                     |
| `buttonPosition`     | `"overlay"` \| `"bottom"`                                           | `"overlay"`             | Position of navigation buttons.               |
| `customButton`       | `{ left?: string \| ReactElement; right?: string \| ReactElement }` | Arrows from `getIcon()` | Custom navigation buttons.                    |
| `hideButton`         | `boolean`                                                           | `false`                 | Hide navigation buttons.                      |
| `showIndicators`     | `boolean`                                                           | `false`                 | Show small indicators for each slide.         |
| `defaultImageIndex`  | `number`                                                            | `0`                     | Starting slide index.                         |
| `pauseOnHover`       | `boolean`                                                           | `false`                 | Pause auto-switching on hover.                |
| `transitionDuration` | `number`                                                            | `700`                   | Duration of transition animation in ms.       |

## 🎨 Customization

### Custom Buttons

```tsx
<Slide
  images={images}
  customButton={{
    left: '◀',
    right: '▶',
  }}
/>
```

## 📘 Example

Here’s a complete working example in React for more visit [Live](https://teneplaysofficial.github.io/react-slideshow/?path=/docs/image-slideshow-demo--docs):

```tsx
import React from 'react';
import Slide from '@tenedev/react-slideshow';
//or
import { Slide } from '@tenedev/react-slideshow';

const App = () => {
  const slides = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
  ];

  return (
    <div className="mx-auto mt-8 w-full max-w-2xl">
      <Slide images={slides} duration={5000} autoSwitch infiniteLoop button />
    </div>
  );
};

export default App;
```

## 🛠️ Contributing

We welcome contributions from the community!

If you have ideas, suggestions, or bug reports, feel free to [open an issue](https://github.com/TenEplaysOfficial/react-slideshow/issues) or [submit a pull request](https://github.com/TenEplaysOfficial/react-slideshow/pulls) on GitHub.

Let's make `@tenedev/react-slideshow` better together!

## 📜 License

This project is licensed under the [MIT License](LICENSE).  
Copyright © [TenEplaysOfficial](https://github.com/TenEplaysOfficial)
