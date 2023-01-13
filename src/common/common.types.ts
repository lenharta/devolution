export type CommonSizeType = "small" | "medium" | "large";

export type CommonChangeEvent<ElementType> = (
  event: React.ChangeEvent<ElementType>
) => void;

export type CommonClickEvent<ElementType> = (
  event: React.MouseEvent<ElementType>
) => void;
