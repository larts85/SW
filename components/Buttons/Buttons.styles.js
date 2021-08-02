export const styles = {
  common: "group flex items-center justify-center py-2.5 px-5 gap-1",
  primary: function () {
    return `
      ${this.common} 
      bg-primary-dark text-neutrals-white rounded 
      hover:rounded-lg hover:bg-primary-base
    `;
  },
  secondary: function () {
    return `
      ${this.common} 
      bg-transparent text-neutrals-base800 rounded-lg border-2
      hover:text-primary-dark
    `;
  },
  text: function () {
    return `
      ${this.common} 
      bg-transparent text-primary-dark font-semibold
      hover:text-neutrals-base700
    `;
  },
};
