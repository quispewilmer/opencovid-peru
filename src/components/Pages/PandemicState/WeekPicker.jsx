import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import classNames from 'classnames'

export function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days;
}

export function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('isoWeek')
      .toDate(),
    to: moment(date)
      .endOf('isoWeek')
      .toDate(),
  };
}

const PickerInput = (props) => {
  return (
    <div className="pandemicstate-filter">
      <div className="pandemicstate-filter__icon pandemicstate-filter__icon--calendar"></div>
      <input className="pandemicstate-filter__input" {...props} />
    </div>
  )
}

export default class WeekPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverRange: undefined,
      selectedDays: getWeekDays(getWeekRange(props.initialDate || moment()).from),
    }
  }

  handleDayChange = date => {
    const selectedDays = getWeekDays(getWeekRange(date).from)
    this.setState({
      selectedDays,
    });
    this.props.onChange(selectedDays)
  };

  handleDayEnter = date => {
    this.setState({
      hoverRange: getWeekRange(date),
    });
  };

  handleDayLeave = () => {
    this.setState({
      hoverRange: undefined,
    });
  };

  render() {
    const { hoverRange, selectedDays } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
      <div className={classNames('SelectedWeekExample', this.props.className)}>
        <DayPickerInput
          value={selectedDays.length === 7 ? `${moment(selectedDays[0]).format('MM-DD-YYYY')} - ${moment(selectedDays[6]).format('MM-DD-YYYY')}` : ''}
          component={PickerInput}
          dayPickerProps={{
            selectedDays: selectedDays,
            showWeekNumbers: false,
            showOutsideDays: true,
            modifiers: modifiers,
            onDayClick: this.handleDayChange,
            onDayMouseEnter: this.handleDayEnter,
            onDayMouseLeave: this.handleDayLeave,
            firstDayOfWeek: 1,
            disabledDays: this.props.disabledDays
          }}
        />

        <Helmet>
          <style>{`
            .SelectedWeekExample .DayPicker-Month {
              border-collapse: separate;
            }
            .SelectedWeekExample .DayPicker-WeekNumber {
              outline: none;
            }
            .SelectedWeekExample .DayPicker-Day {
              outline: none;
              border: 1px solid transparent;
            }
            .SelectedWeekExample .DayPicker-Day--hoverRange {
              background-color: #EFEFEF !important;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRange {
              background-color: #fff7ba !important;
              border-top-color: #FFEB3B;
              border-bottom-color: #FFEB3B;
              border-left-color: #fff7ba;
              border-right-color: #fff7ba;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRangeStart {
              background-color: #FFEB3B !important;
              border-left: 1px solid #FFEB3B;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRangeEnd {
              background-color: #FFEB3B !important;
              border-right: 1px solid #FFEB3B;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
            .SelectedWeekExample .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
              border-radius: 0 !important;
              color: black !important;
            }
            .SelectedWeekExample .DayPicker-Day--hoverRange:hover {
              border-radius: 0 !important;
            }

            .SelectedWeekExample .DayPickerInput-Overlay {
              margin-left: 53px;
            }
          `}</style>
        </Helmet>
      </div>
    );
  }
}
