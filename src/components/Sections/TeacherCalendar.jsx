import { Calendar } from 'react-big-calendar';

// When using `Luxon`
import { luxonLocalizer } from 'react-big-calendar';
import { DateTime, Settings } from 'luxon';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Luxon uses the Intl API, which currently does not contain `weekInfo`
// to determine which weekday is the start of the week by `culture`.
// The `luxonLocalizer` defaults this to Sunday, which differs from
// the Luxon default of Monday. The localizer requires this option
// to change the display, and the date math for determining the
// start of a week. Luxon uses non-zero based values for `weekday`.
const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 7 });
const myEventsList = {};

const TeacherCalendar = () => {
  return (
    <div>
      <div className="myCustomHeight">
        <Calendar
          localizer={localizer}
          // events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
};

export default TeacherCalendar;
