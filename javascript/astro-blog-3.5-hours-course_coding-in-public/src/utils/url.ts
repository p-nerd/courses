export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
};
