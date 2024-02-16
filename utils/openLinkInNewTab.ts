export const openLinkInNewTab = (
  link?: string,
  e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => {
  e?.stopPropagation();
  e?.preventDefault();
  window.open(link, "_blank");
};
