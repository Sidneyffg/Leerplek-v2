/**
 * @type {Document}
 */
export const Document = (typeof document != "undefined") ? document : {
  addEventListener: () => { }
};