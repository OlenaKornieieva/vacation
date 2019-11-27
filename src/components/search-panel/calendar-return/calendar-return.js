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
                        className="form-control border-0 rounded-0"
                        value={value}
                        onClick={onClick}
                    />
                    <span
                        className="input-group-addon btn border-0 rounded-0">
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