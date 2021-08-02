const common = "group rounded-full flex items-center justify-center gap-1";

export const button = `
  ${common} 
  w-6 h-6 rounded-full cursor-pointer border-2 border-primary-dark
  `;

export const center = (isSelected) => `
  ${common} 
  ${isSelected ? "" : "hidden "}
  w-4 h-4 rounded-full cursor-pointer bg-primary-dark
`;
