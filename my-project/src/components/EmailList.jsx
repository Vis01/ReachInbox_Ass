import React, { useState, useEffect } from 'react';

const Email=()=>{
    return

}

const EmailList = () => {
    const [emails, setEmails] = useState([]);
    const fetchEmails = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
    console.log(token);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Properly format the authorization header
    };

    try {
      const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        method: 'GET',
        headers: headers
      });
      const result = await response.json();
      if (response.ok && result.data) {
        setEmails(result.data);
      } else {
        throw new Error('Failed to load emails');
      }
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  // Fetch emails on component mount
  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className='w-full h-full justify-center p-3'>
        <div className='w-full h-20'>
            <h1 className='text-2xl'>All Inbox(s)</h1>
        </div>
        <div>
        {emails.map(email => (
          <div key={email.id} className="bg-gray-700 p-3 rounded my-2 flex justify-between items-center">
            <div>
              <div className="text-white">{email.fromName} ({email.fromEmail})</div>
              <div className="text-gray-400">{email.subject}</div>
            </div>
            <button className="text-blue-400 hover:text-blue-500 cursor-pointer">Interested</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmailList