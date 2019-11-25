import React from 'react';

const SearchPanel = () => {
    return (
        <div>
            <div className='d-flex justify-content-end'>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optradio"/>חבילות טוס וסע
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optradio"/>חבילות נופש
                    </label>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <button>חפש</button>
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                    <span>נוסים</span>
                    <i className="far fa-user"/>
                </button>
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                    <span>חזרה</span>
                    <i className="far fa-calendar-alt"/>
                </button>
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                    <span>יציאה</span>
                    <i className="far fa-calendar-alt"/>
                </button>
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                    <span>יעד:</span>
                    <i className="fas fa-plane"/>
                </button>
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                    <span>סוג חבילה:</span>
                    <i className="fas fa-suitcase"/>
                </button>
            </div>
            <div className='d-flex justify-content-end'>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value=""/>חיפוש גמיש (-/+ יום)
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value=""/> טיסות ישירות בלבד
                    </label>
                </div>
            </div>
        </div>
    )
};

export default SearchPanel;