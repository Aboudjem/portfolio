import Telegram from '../atoms/icons/social-medias/Telegram';
import Mail from '../atoms/icons/social-medias/Mail';
import ResponsiveImage from '../atoms/ResponsiveImage';

function Introduction() {
  return (
    <section className="backgroundImage">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-10 pb-20 lg:flex-row lg:items-center">
          {/* <!-- Left --> */}
          <div className="order-2 lg:order-1 lg:w-1/2">
            <div className="topdiv mb-8 text-5xl font-bold leading-snug text-white xl:text-[66px] xl:leading-normal">
              <h1 className="toptext2">Smart Contracts Developer</h1>
              <h2 className="text-new-500 mt-6">Adam Boudjemaa</h2>
              <span className="wideLine inline-block">
                <span className="toptext2">Solidity & Web3</span>
              </span>
            </div>
            <p className="text-borderl-500 toppara mb-4 text-2xl">
              Realize blockchain potential with a developer trusted by industry
              leaders.
            </p>
            <div className="btndiv mt-10 flex items-center gap-2">
              <a
                href="https://t.me/adamboudj"
                target="_blank"
                className="group relative inline-flex w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 px-7 py-2.5 font-bold text-white"
                rel="noreferrer"
              >
                <div className="absolute h-[200%] w-[200%] translate-x-[-70%] rotate-45  bg-white/50 transition-all duration-500 group-hover:translate-x-[50%]"></div>
                <Telegram className="mr-2 h-6 w-6" />
                Telegram
              </a>

              <a
                href="mailto:adam@smart-contracts-developer.com"
                target="_blank"
                className="group relative inline-flex w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-600 to-lime-500 px-7 py-2.5 font-bold text-white"
                rel="noreferrer"
              >
                <div className="absolute h-[200%] w-[200%] translate-x-[-70%] rotate-45  bg-white/50 transition-all duration-500 group-hover:translate-x-[50%]"></div>
                <Mail className="mr-2 h-6 w-6" />
                Mail
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
          <div className="order-1 lg:order-2 lg:w-1/2">
            <div>
              <ResponsiveImage
                mobileSrc={
                  'assets/images/core/adam-blockchain-smart-contracts.webp'
                }
                desktopSrc={
                  'assets/images/core/adam-blockchain-web3-developer-solidity.webp'
                }
                alt={'adam-boudjemaa-solidity-smart-contracts-developer'}
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
