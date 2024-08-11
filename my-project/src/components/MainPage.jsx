import React, { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";
import Spinner from "./Spinner"; // Adjust the path if needed

const AllInbox = lazy(() => import("./AllInbox"));
const CenterPage = lazy(() => import("./CenterPage"));
const RightSection = lazy(() => import("./RightSection"));

const MainPage = () => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);
  const [threadLoading, setThreadLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setData(response.data.data);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMail = async (threadId) => {
    setSelectedThread(threadId);
    setThreadLoading(true);

    try {
      // Simulate fetching data or performing some async action
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      setError("Error loading thread. Please try again.");
      console.error("Error loading thread:", error);
    } finally {
      setThreadLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full h-screen">
      <div className="w-1/4 h-full">
        <Suspense fallback={<Spinner />}>
          <AllInbox data={datas} loadMail={loadMail} />
        </Suspense>
      </div>
      <div className="w-2/4 h-full relative">
        {threadLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
            <Spinner />
          </div>
        )}
        <Suspense fallback={<Spinner />}>
          <CenterPage
            selectedThread={selectedThread !== null ? selectedThread.toString() : ""}
          />
        </Suspense>
      </div>
      <div className="w-1/4 h-full">
        <Suspense fallback={<Spinner />}>
          <RightSection />
        </Suspense>
      </div>
    </div>
  );
};

export default MainPage;
