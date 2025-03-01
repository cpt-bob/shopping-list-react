import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">
              Date and time of event will go here
            </h2>
            <p className="mt-2 mb-4">Description of event will go here</p>
            <Link
              to="the event will go here"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Go to Event
            </Link>
          </Card>
          {/* This will be auto-populated when this page is finished */}
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">
              Date and time of event will go here
            </h2>
            <p className="mt-2 mb-4">Description of event will go here</p>
            <Link
              to="the event will go here"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Go to Event
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
