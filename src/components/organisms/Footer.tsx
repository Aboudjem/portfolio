import React from 'react';
import Twitter from '../atoms/icons/social-medias/Twitter';
import Linkedin from '../atoms/icons/social-medias/Linkedin';
import Medium from '../atoms/icons/social-medias/Medium';
import Telegram from '../atoms/icons/social-medias/Telegram';
import Github from '../atoms/icons/social-medias/Github';
import StackExchange from '../atoms/icons/social-medias/Stackexchange';

interface SocialLink {
  href: string;
  ariaLabel: string;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://twitter.com/AdamBoudj',
    ariaLabel: 'Follow Adam Boudjemaa on Twitter',
    title: "Adam Boudjemaa's Twitter",
    Icon: Twitter
  },
  {
    href: 'https://www.linkedin.com/in/adam-boudjemaa',
    ariaLabel: 'Connect with Adam Boudjemaa on LinkedIn',
    title: "Adam Boudjemaa's LinkedIn",
    Icon: Linkedin
  },
  {
    href: 'https://medium.com/@adamboudj',
    ariaLabel: "Read Adam Boudjemaa's articles on Medium",
    title: "Adam Boudjemaa's Medium",
    Icon: Medium
  },
  {
    href: 'https://t.me/adamboudj',
    ariaLabel: 'Join Adam Boudjemaa on Telegram',
    title: "Adam Boudjemaa's Telegram",
    Icon: Telegram
  },
  {
    href: 'https://github.com/Aboudjem',
    ariaLabel: "View Adam Boudjemaa's GitHub repositories",
    title: "Adam Boudjemaa's GitHub",
    Icon: Github
  },
  {
    href: 'https://ethereum.stackexchange.com/users/49141/adam-boudj',
    ariaLabel:
      "Explore Adam Boudjemaa's contributions to Ethereum Stack Exchange",
    title: "Adam Boudjemaa's Ethereum Stack Exchange",
    Icon: StackExchange
  }
  // Add any more links as needed
];

const Footer: React.FC = () => {
  return (
    <footer className="border-b border-[#1C2134] py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="mt-5 flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
            {socialLinks.map(({ href, ariaLabel, title, Icon }) => (
              <a
                key={href}
                href={href}
                className="flex h-12 w-12 transform justify-around transition-all duration-500 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                title={title}
              >
                <Icon className="group-hover:fill-current" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
