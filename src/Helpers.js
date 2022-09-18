export const downloadPdf = (ref, file) => {
  let link = document.createElement("a");
  link.href = ref;
  link.download = file;
  link.click();
};
