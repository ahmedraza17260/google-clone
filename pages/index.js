import Head from "next/head";
import Avator from "../components/Avator";
import {
  ViewGridIcon,
  MicrophoneIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left Section */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* icons */}

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avator url="https://lh3.googleusercontent.com/ogw/ADea4I6hqI3RKm1WrBWaoWL-PyP6A364tpdKwEcofWuE=s83-c-mo" />
        </div>
      </header>
      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow ">
        <Image
          src="https://www.google.com.pk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          // src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />

        <div className="flex w-full mt-5 hover:shadow-lg sm:max-w-xl lg:max-w-2xl focus-within:shadow-lg max-w-md rounded-full border px-5 py-3 items-center border-gray-200">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
    </div>
  );
}
