import { ComponentType, Suspense } from "react";
import Loader from "../../feedback/Loader";

const WithSuspense = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithSuspense = (props: P) => {
    return (
      <Suspense fallback={<Loader />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
  return ComponentWithSuspense;
};

export default WithSuspense;
