import React, { useEffect, useState } from 'react';
import axios from 'axios';

const  = () => {
  const [threads, setThreads] = useState([]);
  const authToken = localStorage.getItem('authToken');
  const fetchThreads = async () => {
    try {
      const response = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setThreads(response.data.threads || []);
    } catch (error) {
      console.error('Error fetching threads', error);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, [authToken]);

  const handleReset = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_API_BASE_URL}/onebox/reset`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      // Re-fetch threads after reset
      fetchThreads();
    } catch (error) {
      console.error('Error resetting onebox', error);
    }
  };

  const handleReply = async (threadId) => {
    try {
      const emailData = {
        toName: "Recipient Name",
        to: "recipient@example.com",
        from: "sender@example.com",
        fromName: "Sender Name",
        subject: "Subject Here",
        body: "<p>Email body here</p>",
        references: [
          "<reference-id-1@example.com>",
          "<reference-id-2@example.com>",
        ],
        inReplyTo: "<reference-id-1@example.com>",
      };

      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/onebox/reply/${threadId}`, emailData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      alert('Reply sent successfully');
    } catch (error) {
      console.error('Error sending reply', error);
    }
  };

  return (
    <div className='flex w-screen h-screen'>

      <div className='w-14 h-full border-spacing-1 py-1 bg-zinc-600'>

      </div>
      <div className='w-full h-full border-spacing-1'>
        <div className='h-16 justify-between p-6 gap-6 border-1 border-b-0 bg-gray-500'>
          <h className="font-bold text-white text-xl " >Onebox</h>

        </div>
        <div>
        <button onClick={handleReset}>Reset Onebox</button>
          {threads.map((thread) => (
            <div key={thread.id}>
              <h3>{thread.subject}</h3>
              <button onClick={() => handleReply(thread.id)}>Reply</button>
            </div>
          ))}

        </div>
         
      </div>
      
    </div>
  );
};


