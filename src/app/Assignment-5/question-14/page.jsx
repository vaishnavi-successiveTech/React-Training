"use client";

import withAuth from "@/components/withAuth";

const ProtectedPage = () => {
  return (
    <>
      <h1>Protected Page</h1>
      <p>Only authenticated users can see this.</p>
    </>
  );
};

export default withAuth(ProtectedPage);

