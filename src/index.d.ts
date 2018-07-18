declare const graphql: (query: TemplateStringsArray) => void;

declare module 'hex2rgba' {
  export default function hex2rgba(hex: string, alpha: number): string;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
