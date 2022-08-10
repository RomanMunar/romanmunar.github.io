export {};

declare global {
  var dataLayer: any[];

  interface Window {
    dataLayer: any[];
  }
}
