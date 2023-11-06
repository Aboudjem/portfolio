import React from 'react';

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
            <h1 className="xnone"> Hey, I am </h1>
            <h1 className="text-5xl leading-snug xl:text-[66px] mb-8 xl:leading-normal font-bold text-white topdiv">
              <span className="toptext"> Hey, I am </span> <br />
              <span className="text-new-500">Adam Boudjemaa </span> <br />
              <span
                className="inline-block"
                style={{
                  background:
                    "url('assets/images/blockchain-background/wide-line.svg') no-repeat bottom"
                }
              }
              >
                <span className="toptext2">Blockchain Lead </span>
              </span>
            </h1>
            <h2 className="xnone;">Adam Boudjemaa</h2>
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
                <i className="fab fa-telegram-plane ml-2"></i>
              </a>

              {/* Email Button */}
              <a
                href="mailto:adam@smart-contracts-developer.com"
                className="btn1 bg-email text-interface-100 py-4 rounded-lg inline-flex justify-center items-center font-medium transition-all ml-2"
              >
                <span>Email</span>
                <i className="fas fa-envelope ml-2"></i>
              </a>
            </div>
            <div className="pt-14">
              <p className="text-base text-interface-200">
                <span className="text-new-500 font-semibold text-xl">
                  7 years
                </span>{' '}
                of expertise, with{' '}
                <span className="text-new-500 font-semibold text-xl">500+</span>{' '}
                smart contracts successfully deployed.
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
