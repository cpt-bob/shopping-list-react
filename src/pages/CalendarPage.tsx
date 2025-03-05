import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const CalendarPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // const response = await fetch("/api/activities");
        // const data = await response.json();

        // console.log("API response:", data)
        const mockData = [
          {
            activity: "Sample Event 1",
            dateStart: "2025-03-22T15:00:00", // Example date in ISO string
            dateEnd: "2025-03-22T21:00:00",
          },
          {
            activity: "Sample Event 2",
            dateStart: "2025-03-17T19:00:00",
            dateEnd: "2025-03-17T22:00:00",
          },
        ];

        // Format events into the correct format for react-big-calendar
        const formattedEvents = mockData.map((activity) => ({
          title: activity.activity,
          start: new Date(activity.dateStart), // Assuming the date comes as a string
          end: new Date(activity.dateEnd), // You can adjust this if you need a start/end range
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Current Month Calendar
        </h1>
        <div className="w-full">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }} // Adjust the calendar height
            views={["month", "week", "day"]} // Allows switching between different views
            toolbar={true} // Shows the toolbar
            selectable={true} // Allows selecting dates for events
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
