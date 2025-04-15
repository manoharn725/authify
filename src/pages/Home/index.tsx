import { FunctionComponent } from "react";
// interface IHomeProps {}<IHomeProps>

const Home: FunctionComponent = () => {
  return (
    <section className="h-[calc(100%-64px)] flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Welcome Home 🎉
        </h1>
        <p className="mb-6 text-gray-600">You are successfully logged in!</p>
      </div>
    </section>
  );
};
export default Home;
