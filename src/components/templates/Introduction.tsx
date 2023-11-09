import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Introduction() {
  return (
    <section
      style={{
        background:
          "url('assets/images/blockchain-background/web-three-bg.jpg') no-repeat center center/cover"
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center pb-20">
          {/* <!-- Left --> */}
          <div className="lg:w-1/2">
            <div className="text-5xl leading-snug xl:text-[66px] mb-8 xl:leading-normal font-bold text-white topdiv">
              <h1 className="toptext">Hey, I am</h1>
              <h2 className="text-new-500">Adam Boudjemaa</h2>
              <span
                className="inline-block"
                style={{
                  background:
                    "url('assets/images/blockchain-background/wide-line.svg') no-repeat bottom"
                }}
              >
                <span className="toptext2">Blockchain Lead</span>
              </span>
            </div>
            <p className="text-2xl text-borderl-500 mb-4 toppara">
              Turn your ideas into reality with trusted <br /> top-rated
              blockchain expertise.
            </p>
            <div className="flex items-center gap-2 mt-10 btndiv">
              {/* Telegram Button */}
              <a
                href="https://t.me/adamboudj"
                className="btn1 bg-telegram text-interface-100 py-4 rounded-lg inline-flex justify-center items-center font-medium transition-all ml-2"
              >
                <span>Telegram</span>
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  style={{ margin: '0 8px' }}
                />
              </a>

              {/* Email Button */}
              <a
                href="mailto:adam@smart-contracts-developer.com"
                className="btn1 bg-email text-interface-100 py-4 rounded-lg inline-flex justify-center items-center font-medium transition-all ml-2"
              >
                <span>Email </span>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ margin: '0 8px' }}
                />
              </a>
            </div>
            <div className="pt-14">
              <p className="text-base text-white">
                With{' '}
                <span className="text-new-500 font-semibold text-xl">
                  7 years
                </span>{' '}
                in{' '}
                <span className="text-new-500 font-semibold text-xl">
                  blockchain
                </span>
                , my journey includes:
                <ul className="list-disc pl-8 mt-4 text-white">
                  <li>
                    Expertise in{' '}
                    <span className="text-new-500 font-semibold text-xl">
                      EVM
                    </span>{' '}
                    and{' '}
                    <span className="text-new-500 font-semibold text-xl">
                      Solidity
                    </span>
                    , enhancing smart contracts.
                  </li>
                  <li>
                    Key player in{' '}
                    <span className="text-new-500 font-semibold text-xl">
                      DeFi
                    </span>{' '}
                    with{' '}
                    <span className="text-new-500 font-semibold text-xl">
                      ERC6960
                    </span>{' '}
                    and{' '}
                    <span className="text-new-500 font-semibold text-xl">
                      ERC3643{' '}
                    </span>
                    standards.
                  </li>
                  <li>
                    Contributed to{' '}
                    <span className="text-new-500 font-semibold text-xl">
                      1000+
                    </span>{' '}
                    smart contracts, supporting blockchain progress.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/* <!-- Right --> */}
          <div className="lg:w-1/2">
            <div>
              <img
                src="assets/images/core/adam-blockchain-web3-developer-solidity.webp"
                alt="adam-boudjemaa-solidity-developer"
                width="888"
                height="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
