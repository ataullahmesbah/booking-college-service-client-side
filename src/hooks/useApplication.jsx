// useApplication.js
import { useQuery } from "@tanstack/react-query";

const useApplication = (email) => {
  const { data: appliedForm = [] } = useQuery(
    ['appliedForm', email],
    async () => {
      const res = await fetch(`http://localhost:5000/application?email=${email}`);
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
