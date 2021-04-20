import { getMonth, padMonthDays, weekdaysNames } from '../models/Calendar';

const WeekdayName = ({ name, className = '' }) => (
  <h2 className={className}>{name}</h2>
);

const EmptyDay = () => (
  <div></div>
);

const Day = ({ date }) => (
  <div>
    {date.getDate()}
  </div>
);

export const Month = ({ year, monthIndex, className = '' }) => (
  <div>
    <header>
      <h1>{new Date(year, monthIndex).toLocaleString('default', { month: 'long' })}</h1>
    </header>
    <section>
      <header className={className}>
        {Object.values(weekdaysNames).map(name => (
          <WeekdayName
            className="bg-black text-white"
            name={name}
            key={name}
          />
        ))}
      </header>

      <div className={className}>
        {padMonthDays(getMonth(year, monthIndex)).map((date, i) => typeof date === "number"
          ? (<EmptyDay key={i} />)
          : (<Day key={date.getTime()} date={date} />))}
      </div>
    </section>
  </div>
);
