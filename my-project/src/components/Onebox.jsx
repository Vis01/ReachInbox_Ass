import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from 'axios';
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import EmailView from "./Emailview";
import Blankpage from "./Blankpage";


function Onebox() {
  const [mails, setMails] = useState([]);
  const [selectedTab, setSelectedTab] = useState('blank');
  const fetchMails = async () => {
    const token = localStorage.getItem('authToken');
    console.log(token);
    try {
      const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMails(response.data);
    } catch (error) {
      console.error('Error fetching mails:', error);
    }
  };

  const handleSelect = (tab) => {
    setSelectedTab(tab);
    console.log("Inbox");
    if (tab === 'inbox') {
      fetchMails();
    }
  };


  return (
    <div className="Onebox w-full dark:bg-black">
      <div className="flex h-screen w-full dark:text-white bg-gray-100 dark:bg-black">
        <Sidebar onSelect={handleSelect} />
        <div className="w-full h-full" >
         
            <Header/>
            {selectedTab === 'blank' ? (
             <Blankpage/>
        ) : (
          <div className="w-full h-full">
          <EmailList emails={mails} />
          <EmailView />
          </div>
        )}
           
            
         
        </div>
      </div>
    </div>
  );
}

export default Onebox;