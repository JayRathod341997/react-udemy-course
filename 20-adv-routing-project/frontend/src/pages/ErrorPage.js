import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred";
  let message = "Something went wrong";

  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find the resource or page";
  }

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
