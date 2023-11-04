import AdamLogo from '../atoms/icons/AdamLogo';

function Footer() {
  return (
    <footer
      className="lg:py-120 py-20 border-b border-[#1C2134] myfooter"
      style={{
        background:
          "url('assets/images/bg/dev-ft-bg.jpg') no-repeat center center/cover"
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 myfooter">
        <div className="grid md:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white divide-opacity-10 justify-between gap-10">
          <div className="md:col-span-6 lg:col-span-3">
            <AdamLogo />
            <p className="text-white text-base">
              Crafting cutting-edge blockchain solutions with dedication and
              expertise. Let's shape the future together
            </p>
            <div className="flex space-x-3 mt-7">
              <a
                href="https://twitter.com/AdamBoudj"
                className="text-interface-200 hover:bg-new-500 hover:text-interface-100 transition-all text-lg w-10 h-10 rounded-full bg-white bg-opacity-10 inline-flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adam Boudjemaa's Twitter - Blockchain Developer Expertise"
              >
                <i className="fa-brands fa-beat-fade fa-twitter"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/adam-boudjemaa"
                className="text-interface-200 hover:bg-new-500 hover:text-interface-100 transition-all text-lg w-10 h-10 rounded-full bg-white bg-opacity-10 inline-flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adam Boudjemaa's LinkedIn - Professional Blockchain Profile"
              >
                <i className="fa-brands fa-beat-fade fa-linkedin"></i>
              </a>

              <a
                href="https://medium.com/@adamboudj"
                className="text-interface-200 hover:bg-new-500 hover:text-interface-100 transition-all text-lg w-10 h-10 rounded-full bg-white bg-opacity-10 inline-flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adam Boudjemaa's Medium - Blockchain and Smart Contract Articles"
              >
                <i className="fa-brands fa-beat-fade fa-medium"></i>
              </a>

              <a
                href="https://t.me/adamboudj"
                className="text-interface-200 hover:bg-new-500 hover:text-interface-100 transition-all text-lg w-10 h-10 rounded-full bg-white bg-opacity-10 inline-flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adam Boudjemaa's Telegram - Direct Blockchain Consultation"
              >
                <i className="fa-brands fa-beat-fade fa-telegram"></i>
              </a>

              <a
                href="https://ethereum.stackexchange.com/users/49141/adam-boudj"
                className="text-interface-200 hover:bg-new-500 hover:text-interface-100 transition-all text-lg w-10 h-10 rounded-full bg-white bg-opacity-10 inline-flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adam Boudjemaa's Ethereum Stack Exchange - Blockchain Q&A Contributions"
              >
                <i className="fa-brands fa-beat-fade fa-stack-exchange"></i>
              </a>

              <a
                href="https://github.com/Aboudjem"
                className="text-interface-200 hover:bg-new-500 hover:text-interface-100 transition-all text-lg w-10 h-10 rounded-full bg-white bg-opacity-10 inline-flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adam Boudjemaa's GitHub - Blockchain Projects and Smart Contract Repositories"
              >
                <i className="fa-brands fa-beat-fade fa-github"></i>
              </a>
            </div>
          </div>
          <address className="md:col-span-6 lg:col-span-4 pt-8 lg:pt-0 lg:pl-12">
            <div>
              <ul className="space-y-3">
                <li className="flex space-x-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18.3334C12.8125 18.3334 17.5 13.1651 17.5 9.07409C17.5 4.9831 14.1421 1.66669 10 1.66669C5.85786 1.66669 2.5 4.9831 2.5 9.07409C2.5 13.1651 7.1875 18.3334 10 18.3334ZM10 11.6667C11.3807 11.6667 12.5 10.5474 12.5 9.16669C12.5 7.78598 11.3807 6.66669 10 6.66669C8.61929 6.66669 7.5 7.78598 7.5 9.16669C7.5 10.5474 8.61929 11.6667 10 11.6667Z"
                      fill="#DAED1A"
                    />
                  </svg>
                  <p className="text-white">Dubai, United Arab Emirates</p>
                </li>
                <li className="flex space-x-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 15.8333V14.4617C17.5 13.7802 17.0851 13.1674 16.4523 12.9143L14.7572 12.2362C13.9524 11.9143 13.0352 12.263 12.6475 13.0383L12.5 13.3333C12.5 13.3333 10.4167 12.9167 8.75 11.25C7.08333 9.58333 6.66667 7.5 6.66667 7.5L6.96168 7.35249C7.73698 6.96484 8.08571 6.04761 7.76379 5.2428L7.08574 3.54768C6.83263 2.91492 6.21979 2.5 5.53828 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667C2.5 11.5305 8.46954 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333Z"
                      fill="#DAED1A"
                    />
                  </svg>
                  <a href="tel:+971585129533" className="text-white text-base">
                    +971 58 512 9533
                  </a>
                </li>
              </ul>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
