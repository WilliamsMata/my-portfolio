import { type FC } from "react";
import { cn } from "~/lib/utils";
import {
  TelegramIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "../icons";

interface SocialMedia {
  title: string;
  url: string;
  icon: JSX.Element;
}

const mySocialsMedia: SocialMedia[] = [
  {
    title: "github",
    url: "https://github.com/WilliamsMata",
    icon: <GithubIcon className="h-8 w-8" />,
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/williams-mata",
    icon: <LinkedinIcon className="h-8 w-8" />,
  },
  {
    title: "telegram",
    url: "https://t.me/williams_rm",
    icon: <TelegramIcon className="h-8 w-8" />,
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/williams_rm/",
    icon: <InstagramIcon className="h-8 w-8" />,
  },
  {
    title: "twitter",
    url: "https://twitter.com/williamsmata99",
    icon: <TwitterIcon className="h-8 w-8" />,
  },
];

interface Props {
  className?: string;
}

export const SocialIcons: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex gap-4", className)}>
      {mySocialsMedia.map((social) => (
        <a
          key={social.url}
          href={social.url}
          target="_blank"
          className="transition-transform hover:-translate-y-1"
          title={`Go to my ${social.title}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
