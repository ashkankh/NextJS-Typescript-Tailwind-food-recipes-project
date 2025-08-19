import React from "react";
import { cn } from "@/lib/utils"; // فرض می‌کنیم cn utility دارید

export interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "title"
    | "subtitle"
    | "body"
    | "caption"
    | "span";
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right" | "justify";
  color?:
    | "base"
    | "primary"
    | "secondary"
    | "muted"
    | "accent"
    | "error"
    | "success";
}

const variantStyles = {
  h1: "text-4xl md:text-5xl font-bold tracking-tight",
  h2: "text-3xl md:text-4xl font-semibold tracking-tight",
  h3: "text-2xl md:text-3xl font-semibold",
  h4: "text-xl md:text-2xl font-medium",
  h5: "text-lg md:text-xl font-medium",
  title: "text-lg font-bold mb-5",
  subtitle: "text-lg text-muted-foreground",
  body: "text-base leading-relaxed",
  caption: "text-sm text-muted-foreground",
  span: "inline-block",
};

const weightStyles = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const colorStyles = {
  base: "text-black",
  primary: "text-green-600",
  secondary: "text-secondary-foreground",
  muted: "text-muted-foreground",
  accent: "text-accent-foreground",
  error: "text-destructive",
  success: "text-success-foreground",
};

const defaultElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  title: "h2",
  subtitle: "p",
  body: "p",
  caption: "span",
  span: "span",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  children,
  className,
  as,
  weight = "normal",
  align = "left",
  color = "base",
  ...props
}) => {
  const Component = as || defaultElements[variant] || "p";

  const classes = cn(
    variantStyles[variant],
    weightStyles[weight],
    alignStyles[align],
    colorStyles[color],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Component های اختصاصی برای راحتی بیشتر
export const H1: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="h1" {...props} />
);

export const H2: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="h2" {...props} />
);

export const H3: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="h3" {...props} />
);

export const H4: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="h4" {...props} />
);

export const H5: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="h5" {...props} />
);

export const Title: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="title" {...props} />
);

export const Subtitle: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="subtitle" {...props} />
);

export const Body: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="body" {...props} />
);

export const Caption: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="caption" {...props} />
);

export const Span: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="span" {...props} />
);
