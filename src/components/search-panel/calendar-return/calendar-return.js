import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarReturn = ({endDate, onEndDateSelect}) => {

    const CustomInput = ({value, onClick}) => (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group addon">
                    <input
                        type="text"
                        className="form-control border-right-0 rounded-0 border-secondary"
                        value={value}
                        onClick={onClick}
                    />
                    <span
                        className="input-group-addon btn border border-left-0 border-bottom rounded-0 border-secondary">
                        חזרה
                        <i className="far fa-calendar-alt pl-2"/>
                    </span>
                </div>
            </div>
        </div>
    );

    return (
        <DatePicker
            showPopperArrow={false}
            selected={endDate}
            onChange={onEndDateSelect}
            customInput={<CustomInput/>}
        />
    );
};

export default CalendarReturn;