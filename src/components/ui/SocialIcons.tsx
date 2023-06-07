import { type FC } from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";

interface SocialNetwork {
  title: string;
  url: string;
}

const mySocialsNetwork: SocialNetwork[] = [
  {
    title: "github",
    url: "https://github.com/WilliamsMata",
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/williams_rm/",
  },
  {
    title: "twitter",
    url: "https://twitter.com/williamsmata99",
  },
  {
    title: "telegram",
    url: "https://t.me/williams_rm",
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/williams-mata-rojas-b39a56245/",
  },
];

interface Props {
  className?: string;
}

export const SocialIcons: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex gap-4", className)}>
      {mySocialsNetwork.map((social) => (
        <a
          key={social.url}
          href={social.url}
          target="_blank"
          className="transition-transform hover:-translate-y-1"
        >
          <Image
            src={`/social/${social.title}.svg`}
            alt={`${social.title} icon`}
            width={30}
            height={30}
          />
        </a>
      ))}
    </div>
  );
};
