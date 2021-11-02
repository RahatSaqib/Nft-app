import '../App.css';
import Navbar from './navbar';
import getBlockChain from '../etherum.js';
import axios from 'axios';

import React ,{ useState , useEffect} from 'react';



function Header(){
    const [tokenInfo , setTokenInfo] = useState(undefined);

    useEffect(()=>{
      const init = async ()=>{
        const {nft} = await getBlockChain();
        const tokenURI = await nft.tokenURI(0);
        const{ data } = await axios.get(tokenURI);
        console.log(data.result.image);
        setTokenInfo(data.result);
      }
      init();
    }, []);
    if(typeof tokenInfo == 'undefined'){
      return 'Loading ..';
    }
    return(
        <>
        <Navbar></Navbar>

        <section className="text-gray-400 bg-gray-900 body-font">
       <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Welcome to {tokenInfo.name}
              <br className="hidden lg:inline-block" value="Our Zoo"/>
          </h1>
          <p className="mb-8 leading-relaxed">{tokenInfo.description}</p>
          <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
          </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={tokenInfo.image}></img>

          </div>
        </div>`
      </section>
        </>
    );
}
export default Header;