import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error ocurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  // El 404 React lo identifica automaticamente como un path inexistente.
  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find resource or page.";
  }

  return (
    <>
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
    </>
  );
}
