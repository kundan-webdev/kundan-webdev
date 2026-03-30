export type SocialPlatform =
  | "github"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "devxclub"
  | "email";

export interface Social {
  id: SocialPlatform;
  label: string;
  url: string;
  icon: string;
}

export const socials: Social[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/kundan-webdev",
    icon: "Github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/kundan-webdev/",
    icon: "Linkedin",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/kundan_webdev/",
    icon: "Instagram",
  },
  {
    id: "twitter",
    label: "Twitter",
    url: "https://x.com/kundan_webdev",
    icon: "Twitter",
  },
  {
    id: "devxclub",
    label: "DevXClub",
    url: "https://devxclub.com",
    icon: "Globe",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:kundan.webdev@gmail.com",
    icon: "Mail",
  },
];
