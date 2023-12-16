import React, { useEffect, useState } from 'react';
import { getThreads } from '../service/thread';
import Thread from '../components/Thread';

export default function Home() {
  const [threads, setThreads] = useState(null);

  useEffect(() => {
    getThreads().then((response) => setThreads(response.threads));
  }, []);

  return (
    <>
      {threads && threads.map((thread) => (
        <div key={thread.id} className="mb-3">
          <Thread thread={thread} />
        </div>
      ))}
    </>
  );
}
