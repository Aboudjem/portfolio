import React from 'react';

function Projects() {
  return (
    <section className="pb-120">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <h2 className="mb-4 text-4xl font-bold leading-normal text-white xl:text-5xl xl:leading-snug">
            Project
            <span className="relative z-30">
              <span className="relative z-10"> Highlights</span>
              <svg
                className="absolute bottom-1 right-0"
                width="200"
                height="10"
                viewBox="0 0 243 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7C45.1729 3.98151 151.615 -0.244386 240 7"
                  stroke="#FFD233"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mb-5 text-xl text-white">
            Delve into the key projects that showcase my skills and expertise.
          </p>
        </div>

        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-7">
          {/* <!-- Single Item --> */}
          <div
            className="group relative min-h-[370px] cursor-pointer overflow-hidden rounded-lg"
            style={{
              background:
                "url('assets/images/core/security-tokens-t-rex-erc3643.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-opacity-0 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-80">
              <div className="invisible flex max-w-xs translate-y-24 transform flex-col items-center justify-center text-center opacity-0 transition-transform duration-700 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-white">
                  <a
                    href="https://eips.ethereum.org/EIPS/eip-3643"
                    className="text-3xl font-semibold text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ERC-3643
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="bg-new-500 inline-block h-2 w-2 rounded-full"></span>
                  T-REX The leading standard for on-chain Real-World Asset
                  tokenization
                </span>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-3643"
                  className="border-new-500 text-new-500 mt-6 grid place-content-center rounded border px-3 py-2 text-sm transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View EIP
                </a>{' '}
                <a
                  href="https://github.com/Aboudjem/ERC-3643"
                  className="border-new-500 text-new-500 mt-6 grid place-content-center rounded border px-3 py-2 text-sm transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="group relative min-h-[370px] cursor-pointer overflow-hidden rounded-lg lg:col-span-2"
            style={{
              background:
                "url('assets/images/core/erc-6960-house-shared-ownership.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-opacity-0 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-80">
              <div className="invisible flex max-w-xs translate-y-24 transform flex-col items-center justify-center text-center opacity-0 transition-transform duration-700 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-white">
                  <a
                    href="https://eips.ethereum.org/EIPS/eip-6960"
                    className="text-3xl font-semibold text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ERC-6960
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="bg-new-500 inline-block h-2 w-2 rounded-full"></span>
                  DLT Pioneering on-chain fractionalization of real-world
                  assets.
                </span>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-6960"
                  className="border-new-500 text-new-500 mt-6 grid place-content-center rounded border px-3 py-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View EIP
                </a>
                <a
                  href="https://github.com/Aboudjem/ERC-6960"
                  className="border-new-500 text-new-500 mt-6 grid place-content-center rounded border px-3 py-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="group relative min-h-[370px] cursor-pointer overflow-hidden rounded-lg"
            style={{
              background:
                "url('assets/images/core/erc-20-evm-inline-assembly-yul.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-opacity-0 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-80">
              <div className="invisible flex max-w-xs translate-y-24 transform flex-col items-center justify-center text-center opacity-0 transition-transform duration-700 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-white">
                  <a
                    href="https://github.com/Aboudjem/Yul-ERC20-assembly"
                    className="text-3xl font-semibold text-white"
                  >
                    Inline Assembly ERC20
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="bg-new-500 inline-block h-2 w-2 rounded-full"></span>
                  A hands-on ERC20 experiment using inline Assembly.
                </span>
                <a
                  href="https://github.com/Aboudjem/Yul-ERC20-assembly"
                  className="border-new-500 text-new-500 mt-6 grid place-content-center rounded border px-3 py-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="group relative min-h-[370px] cursor-pointer overflow-hidden rounded-lg"
            style={{
              background:
                "url('assets/images/core/staking-platform-erc20-solidity.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-opacity-0 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-80">
              <div className="invisible flex max-w-xs translate-y-24 transform flex-col items-center justify-center text-center opacity-0 transition-transform duration-700 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-white">
                  <a
                    href="https://github.com/Aboudjem/staking-platform-fixed-apy"
                    className="text-3xl font-semibold text-white"
                  >
                    Staking Platform
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="bg-new-500 inline-block h-2 w-2 rounded-full"></span>
                  Secure, fixed APY with set duration, lockup, and max stake
                  capabilities.
                </span>
                <a
                  href="https://github.com/Aboudjem/staking-platform-fixed-apy"
                  className="border-new-500 text-new-500 mt-6 grid place-content-center rounded border px-3 py-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="group relative min-h-[370px] cursor-pointer overflow-hidden rounded-lg"
            style={{
              background:
                "url('assets/images/core/erc1155-evm-yul-assembly.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-opacity-0 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-80">
              <div className="invisible flex max-w-xs translate-y-24 transform flex-col items-center justify-center text-center opacity-0 transition-transform duration-700 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-white">
                  <a
                    href="https://github.com/Aboudjem/Yul-ERC1155-assembly"
                    className="text-3xl font-semibold text-white"
                  >
                    Pure Yul ERC1155
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="bg-new-500 inline-block h-2 w-2 rounded-full"></span>
                  Crafted an ERC1155 token entirely with Yul Assembly.
                </span>
                <a
                  href="https://github.com/Aboudjem/Yul-ERC1155-assembly"
                  className="border-new-500 text-new-500 mt-6 grid place-content-center rounded border px-3 py-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
