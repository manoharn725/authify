import { ComponentType, Suspense } from "react";
import Loader from "../../components/Loader";

const WithSuspense = (WrappedComponent: ComponentType) => {
  return (
    <Suspense fallback={<Loader />}>
      <WrappedComponent />
    </Suspense>
  );
};

export default WithSuspense;
