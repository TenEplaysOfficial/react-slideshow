# React Slideshow

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
- [React Slideshow](#react-slideshow)
  - [🗂️ Table of Contents](#️-table-of-contents)
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
      autoSwitch={true}
      infiniteLoop={true}
      button={true}
    />
  );
}
```

## ⚙️ Props

| Prop             | Type                                      | Default     | Description |
|------------------|-------------------------------------------|-------------|-------------|
| `images`         | `string[]`                                | **Required**| Array of image URLs for the slideshow. |
| `duration`       | `number`                                  | `3000`      | Time in milliseconds between auto transitions. |
| `autoSwitch`     | `boolean`                                 | `true`      | Automatically switch images after `duration`. |
| `infiniteLoop`   | `boolean`                                 | `true`      | Enables continuous looping of images. |
| `button`         | `boolean`                                 | `true`      | Show or hide default navigation buttons. |
| `transitionEffect` | `"fade"` \| `"slide"`                   | `"slide"`   | Type of transition animation. *(Optional Suggestion)* |
| `onSlideChange`  | `(currentIndex: number) => void`          | `undefined` | Callback function triggered when slide changes. *(Optional Suggestion)* |

## 🎨 Customization

### Custom Buttons

```tsx
<Slide
  images={images}
  customButton={{
    left: "◀",
    right: "▶"
  }}
/>
```

## 📘 Example

Here’s a complete working example in React for more visit [Live](https://teneplaysofficial.github.io/react-slideshow):

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
    <div className="w-full max-w-2xl mx-auto mt-8">
      <Slide
        images={slides}
        duration={5000}
        autoSwitch
        infiniteLoop
        button
      />
    </div>
  );
};

export default App;
```

## 🛠️ Contributing

Contributions are welcome! Please open issues or submit pull requests on [GitHub](https://github.com/TenEplaysOfficial/react-slideshow).

## 📜 License

MIT © [TenEplaysOfficial](https://github.com/TenEplaysOfficial)
