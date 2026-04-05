const DEFAULT_RESUME_URL =
  "https://drive.google.com/file/d/1yVaiho1DEX5LZG4rxWQ09LEYj0dwfuwf/view?usp=sharing";

export const RESUME_URL =
  process.env.NEXT_PUBLIC_RESUME_URL?.trim() || DEFAULT_RESUME_URL;
