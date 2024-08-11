import React from "react";
import Inboximage from "../assets/Inboximage.png";

const Blankpage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-full overflow-hidden ">
      <img className="w-96 h-96 " src={Inboximage} alt="Inbox" />
      <div className="text-center">
        <h1 className="text-xl font-semibold mb-2 dark:text-white">
          It's the beginning of a legendary sales pipeline
        </h1>
        <p className="text-gray-800 dark:text-gray-400">
          When you have inbound E-mails, you'll see them here.
        </p>
      </div>
    </div>
  );
};

export default Blankpage;
