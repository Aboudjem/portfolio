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
        <div className="flex flex-col gap-10 pb-20 lg:flex-row lg:items-center">
          {/* <!-- Left --> */}
          <div className="lg:w-1/2">
            <div className="topdiv mb-8 text-5xl font-bold leading-snug text-white xl:text-[66px] xl:leading-normal">
              <h1 className="toptext2">Smart Contracts Developer</h1>
              <h2 className="text-new-500">Adam Boudjemaa</h2>
              <span
                className="inline-block"
                style={{
                  background:
                    "url('assets/images/blockchain-background/wide-line.svg') no-repeat bottom"
                }}
              >
                <span className="toptext2">Solidity | Web3</span>
              </span>
            </div>
            <p className="text-borderl-500 toppara mb-4 text-2xl">
              Realize blockchain potential with a developer trusted by industry
              leaders.
            </p>
            <div className="btndiv mt-10 flex items-center gap-2">
              {/* Telegram Button */}
              <a href="https://t.me/adamboudj">
                <button className="text-md group relative mb-2 mr-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 group-hover:from-blue-600 group-hover:to-blue-500 dark:text-white">
                  <span className="relative w-44 rounded-md px-5 py-2.5 font-bold transition-all duration-300  ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                    <FontAwesomeIcon icon={faTelegramPlane} className="mr-2" />
                    Telegram
                  </span>
                </button>
              </a>

              {/* Email Button */}
              <a href="mailto:adam@smart-contracts-developer.com">
                <button className="text-md group relative mb-2 mr-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-lime-500 p-0.5 group-hover:from-cyan-600 group-hover:to-lime-500 dark:text-white">
                  <span className="relative w-44 rounded-md px-5 py-2.5 font-bold transition-all duration-300 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Email
                  </span>
                </button>
              </a>
            </div>

            <div className="pt-14">
              <p className="text-xl/8 text-white">
                With{' '}
                <span className="text-new-500 text-xl font-semibold">
                  7 years
                </span>{' '}
                in{' '}
                <span className="text-new-500 text-xl font-semibold">
                  blockchain
                </span>
                , I have:
                <ul className="mt-4 list-disc pl-8 text-white">
                  <li>
                    Expertise in{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      EVM
                    </span>{' '}
                    and{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      Solidity
                    </span>
                    , enhancing smart contracts.
                  </li>
                  <li>
                    Contributed to{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      1000+
                    </span>{' '}
                    smart contracts.
                  </li>
                  <li>
                    Advanced knowledge in{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      EVM
                    </span>
                    ,{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      Solidity
                    </span>
                    ,{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      Huff
                    </span>
                    , and{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      Yul.
                    </span>
                  </li>
                  <li>
                    Key player in{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      DeFi
                    </span>{' '}
                    and
                    <span className="text-new-500 text-xl font-semibold">
                      {' '}
                      RWA
                    </span>{' '}
                    with{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      ERC6960
                    </span>{' '}
                    and{' '}
                    <span className="text-new-500 text-xl font-semibold">
                      ERC3643{' '}
                    </span>
                    standards.
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
