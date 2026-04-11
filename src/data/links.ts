const DEFAULT_RESUME_URL =
  "https://drive.google.com/file/d/1csAjhrno17LYhc9yH_mxhi4OZSROGsV6/view?usp=drive_link";

export const RESUME_URL =
  process.env.NEXT_PUBLIC_RESUME_URL?.trim() || DEFAULT_RESUME_URL;
