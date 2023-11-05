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
            {/* Adjusted for responsiveness */}
            {/* Twitter */}
            <a
              href="https://twitter.com/AdamBoudj"
              className="text-white hover:bg-new-500 hover:text-interface-100 transition-all text-lg sm:text-xl md:text-2xl lg:text-3xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-opacity-10 flex justify-center items-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Adam Boudjemaa on Twitter"
              title="Adam Boudjemaa's Twitter"
            >
              <i className="fa-brands fa-twitter"></i>
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
              <i className="fa-brands fa-linkedin"></i>
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
              <i className="fa-brands fa-medium"></i>
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
              <i className="fa-brands fa-telegram"></i>
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
              <i className="fa-brands fa-stack-exchange"></i>
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
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
