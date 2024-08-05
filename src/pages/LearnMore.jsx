import React from 'react'
import { Link } from "react-router-dom";

import "@styles/LearnMore.scss";

import firstpicture from "@assets/first-picture.jpg"
import secondpicture from "@assets/second-picture.jpg"
import thirdpicture from "@assets/third-picture.jpg"
import fourthpicture from "@assets/fourth-picture.webp"

const LearnMore = () => {
  return (
    <div>
      <div className='learnmore-main ' >
        <p className='left-side'> <h4>What is cryptocurrency?</h4> <br/>
        Cryptocurrency is a digital currency that can be used to buy goods and services or traded for a profit. <br/>
        Cryptocurrency investing can take many forms, from buying cryptocurrency directly to investing in crypto funds and companies. <br/>
You can buy cryptocurrency using a crypto exchange or through certain broker-dealers. Once you own it, you can store, manage, and even buy or sell your crypto in a wallet. <br/>
          Cryptocurrency is digital money that doesn’t require a bank or financial institution to verify transactions. <br/>
          Bitcoin, which launched in 2008, was the first cryptocurrency, and it remains by far the biggest, most influential, and best-known. Other well-known cryptocurrencies include Ethereum, Tether, Solana, Tezos, EOS, and ZCash. 
          Some are similar to Bitcoin. Others are based on different technologies, or have new features that allow them to do more than transfer value.   </p>
      <img className='right-side'   src= {firstpicture} alt="firstpicture" />
      </div>
      <div className='learnmore-main '>
        <p className='left-side'> <h4>How does cryptocurrency work?</h4> <br/>
        Cryptocurrencies are supported by a technology known as blockchain, which maintains a tamper-resistant record of transactions and keeps track of who owns what. The use of blockchains addressed a problem faced by previous efforts to create purely digital currencies: preventing people from making copies of their holdings and attempting to spend it twice. <br/>
        Individual units of cryptocurrencies can be referred to as coins or tokens, depending on how they are used. Some are intended to be units of exchange for goods and services, others are stores of value, and some can be used to participate in specific software programs such as games and financial products. <br/>
        At its most basic, a blockchain is a list of transactions that anyone can view and verify. The Bitcoin blockchain, for example, is a record of every time someone sends or receives bitcoin. This list of transactions is fundamental for most cryptocurrencies because it enables secure payments to be made between people who don’t know each other without having to go through a third-party verifier like a bank.</p>
        <img className='right-side'   src={secondpicture} alt="secondpicture" />
      </div>
      <div className='learnmore-main '>
        <p className='left-side'><h4> Why is cryptocurrency the future of finance?</h4> <br/>
        Cryptocurrencies are the first alternative to the traditional banking system, and have powerful advantages over previous payment methods and traditional classes of assets. Think of them as Money 2.0. -- a new kind of cash that is native to the internet, which gives it the potential to be the fastest, easiest, cheapest, safest, and most universal way to exchange value that the world has ever seen. <br/>
        Cryptocurrencies can be used to buy goods or services or held as part of an investment strategy, but they can’t be manipulated by any central authority, simply because there isn’t one. No matter what happens to a government, your cryptocurrency will remain secure.<br/>
        Digital currencies provide equality of opportunity, regardless of where you were born or where you live. As long as you have a smartphone or another internet-connected device, you have the same crypto access as everyone else.<br/>
        Cryptocurrencies create unique opportunities for expanding people’s economic freedom around the world.</p>
        <img className='right-side'   src={thirdpicture} alt="thirdpicture " />
      </div>
      <div className='learnmore-main '>
        <p className='left-side'> <h4>What can you do with cryptocurrency?</h4> <br/>
        There’s a wide range of things you can do with cryptocurrency, and the list grows with time. Here are a few ways to get started, from participating in everyday activities to exploring new technological frontiers: <br/>
        Shop: Over 8,000 global merchants accept cryptocurrency <br/>
        Gift it: Cryptocurrency makes a great gift for friends and family who are interested in learning about new technology.<br/>
        Buy property in a virtual gaming world: Decentraland, which also runs on the Ethereum blockchain, is the first virtual world entirely owned by its users. Users can buy and sell land, avatar clothing, and all kinds of other stuff while partying in virtual nightclubs or mingling in virtual art galleries. <br/>
        Explore decentralized finance, or DeFi: A wide variety of new players are aiming to recreate the entire global financial system, from mutual-fund-like investments to loan-lending mechanisms and way beyond, without any central authorities.</p>
        <img className='right-side'   src= {fourthpicture} alt="fourthpicture" />
      </div>

      <p>If you’re interested in learning more about cryptocurrency, press on <button> <Link to="/get-started">Get Started</Link> </button></p>

    </div>
  )
}

export default LearnMore