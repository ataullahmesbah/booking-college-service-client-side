// useApplication.js
import { useQuery } from "@tanstack/react-query";

const useApplication = (email) => {
  const { data: appliedForm = [] } = useQuery(
    ['appliedForm', email],
    async () => {
      const res = await fetch(`https://booking-college-server-side-nine.vercel.app/application?email=${email}`);
      return res.json();
    },
    {
      enabled: !!email, // Enable the query only if the email exists
      retry: false,
    }
  );

  return appliedForm;
};

export default useApplication;
