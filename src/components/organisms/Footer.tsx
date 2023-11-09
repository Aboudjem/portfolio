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
    <footer
      className="py-5 border-b border-[#1C2134]"
      style={{
        background:
          "url('assets/images/bg/dev-ft-bg.jpg') no-repeat center center/cover"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="mt-5 flex justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
            {' '}
            {/* Twitter */}
            <a
              href="https://twitter.com/AdamBoudj"
              className="text-white hover:bg-new-500 hover:text-interface-100 transition-all text-lg sm:text-xl md:text-2xl lg:text-3xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-opacity-10 flex justify-center items-center"
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
              className="text-white hover:bg-new-500 hover:text-interface-100 transition-all text-lg sm:text-xl md:text-2xl lg:text-3xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-opacity-10 flex justify-center items-center"
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
              className="text-white hover:bg-new-500 hover:text-interface-100 transition-all text-lg sm:text-xl md:text-2xl lg:text-3xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-opacity-10 flex justify-center items-center"
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
              className="text-white hover:bg-new-500 hover:text-interface-100 transition-all text-lg sm:text-xl md:text-2xl lg:text-3xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-opacity-10 flex justify-center items-center"
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
              className="text-white hover:bg-new-500 hover:text-interface-100 transition-all text-lg sm:text-xl md:text-2xl lg:text-3xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-opacity-10 flex justify-center items-center"
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
              className="text-white hover:bg-new-500 hover:text-interface-100 transition-all text-lg sm:text-xl md:text-2xl lg:text-3xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-opacity-10 flex justify-center items-center"
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
