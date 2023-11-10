import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackExchange,
  faTelegram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="border-b border-[#1C2134] py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="mt-5 flex justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
            {' '}
            {/* Twitter */}
            <a
              href="https://twitter.com/AdamBoudj"
              className="hover:bg-new-500 hover:text-interface-100 flex h-8 w-8 items-center justify-center rounded-full bg-opacity-10 text-lg text-white transition-all sm:h-10 sm:w-10 sm:text-xl md:h-12 md:w-12 md:text-2xl lg:h-14 lg:w-14 lg:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Adam Boudjemaa on Twitter"
              title="Adam Boudjemaa's Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/adam-boudjemaa"
              className="hover:bg-new-500 hover:text-interface-100 flex h-8 w-8 items-center justify-center rounded-full bg-opacity-10 text-lg text-white transition-all sm:h-10 sm:w-10 sm:text-xl md:h-12 md:w-12 md:text-2xl lg:h-14 lg:w-14 lg:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Adam Boudjemaa on LinkedIn"
              title="Adam Boudjemaa's LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            {/* Medium */}
            <a
              href="https://medium.com/@adamboudj"
              className="hover:bg-new-500 hover:text-interface-100 flex h-8 w-8 items-center justify-center rounded-full bg-opacity-10 text-lg text-white transition-all sm:h-10 sm:w-10 sm:text-xl md:h-12 md:w-12 md:text-2xl lg:h-14 lg:w-14 lg:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read Adam Boudjemaa's articles on Medium"
              title="Adam Boudjemaa's Medium"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/adamboudj"
              className="hover:bg-new-500 hover:text-interface-100 flex h-8 w-8 items-center justify-center rounded-full bg-opacity-10 text-lg text-white transition-all sm:h-10 sm:w-10 sm:text-xl md:h-12 md:w-12 md:text-2xl lg:h-14 lg:w-14 lg:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join Adam Boudjemaa on Telegram"
              title="Adam Boudjemaa's Telegram"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/Aboudjem"
              className="hover:bg-new-500 hover:text-interface-100 flex h-8 w-8 items-center justify-center rounded-full bg-opacity-10 text-lg text-white transition-all sm:h-10 sm:w-10 sm:text-xl md:h-12 md:w-12 md:text-2xl lg:h-14 lg:w-14 lg:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Adam Boudjemaa's GitHub repositories"
              title="Adam Boudjemaa's GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            {/* Stack Exchange */}
            <a
              href="https://ethereum.stackexchange.com/users/49141/adam-boudj"
              className="hover:bg-new-500 hover:text-interface-100 flex h-8 w-8 items-center justify-center rounded-full bg-opacity-10 text-lg text-white transition-all sm:h-10 sm:w-10 sm:text-xl md:h-12 md:w-12 md:text-2xl lg:h-14 lg:w-14 lg:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore Adam Boudjemaa's contributions to Ethereum Stack Exchange"
              title="Adam Boudjemaa's Ethereum Stack Exchange"
            >
              <FontAwesomeIcon icon={faStackExchange} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
