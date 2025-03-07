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
        const mockData = [
          {
            activity: "Sample Event 1",
            dateStart: "2025-03-22T15:00:00",
            dateEnd: "2025-03-22T21:00:00",
          },
          {
            activity: "Sample Event 2",
            dateStart: "2025-03-17T19:00:00",
            dateEnd: "2025-03-17T22:00:00",
          },
        ];

        const formattedEvents = mockData.map((activity) => ({
          title: activity.activity,
          start: new Date(activity.dateStart),
          end: new Date(activity.dateEnd),
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
        <button className="p-3 mb-3 bg-blue-500 rounded-3xl shadow-2xl">
          Add New Event
        </button>
        <div className="w-full">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            views={["month", "week", "day"]}
            toolbar={true}
            selectable={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
