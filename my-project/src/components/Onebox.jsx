import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import EmailView from "./Emailview";

function Onebox() {
  return (
    <div className="Onebox w-full">
      <div className="flex h-screen w-full bg-gray-100">
        <Sidebar />
        <div className=" w-full" >
            <Header/>
          <div>
          <EmailList />
          <EmailView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onebox;