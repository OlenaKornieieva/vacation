import React from 'react';
import './filter-panel.css';
import ReactBootstrapSlider from 'react-bootstrap-slider';

const FilterPanel = () => {
    return (
        <div className='filter-panel'>
            <h3 className='text-center'>
                סינון תוצאות חיפוש
            </h3>
            <div>
                <h5 className='d-flex justify-content-end'>טווח מחיר לאדם</h5>
                <ReactBootstrapSlider
                    value={1000}
                    step={100}
                    max={10000}
                    min={500}
                    reversed={true}
                />
            </div>
            <div>
                <h5 className='d-flex justify-content-end'>דירוג מלון</h5>
                <div className="form-check d-flex justify-content-between">
                    <span>$990</span>
                    <div className='status-stars'>
                        <i className="fas fa-star star-blue ml-2"/>
                        <i className="fas fa-star star-blue"/>
                        <i className="fas fa-star star-blue"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                    </div>
                    <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1"
                               value="something"/>
                    </label>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <span>$1130</span>
                    <div className='status-stars'>
                        <i className="fas fa-star star-blue"/>
                        <i className="fas fa-star star-blue"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                    </div>
                    <label className="form-check-label" htmlFor="check2">
                        <input type="checkbox" className="form-check-input" id="check2" name="option2"
                               value="something"/>
                    </label>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <span>$1199</span>
                    <div className='status-stars'>
                        <i className="fas fa-star star-blue"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                    </div>
                    <label className="form-check-label">

                        <input type="checkbox" className="form-check-input"/>
                    </label>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <span>$2060</span>
                    <div className='status-stars'>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                    </div>
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/>
                    </label>
                </div>
            </div>
            <div>
                <h5 className='d-flex justify-content-end'>בסיס אירוח</h5>
                <div className="form-check d-flex justify-content-between">
                    <span>$1199</span>
                    <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1"
                               value="something"/>
                    </label>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <span>$1580</span>
                    <label className="form-check-label" htmlFor="check2">
                        <input type="checkbox" className="form-check-input" id="check2" name="option2"
                               value="something"/>
                    </label>
                </div>
            </div>
            <div>
                <h5 className='d-flex justify-content-end'>זמינות</h5>
                <div className="form-check d-flex justify-content-end">
                    <label className="form-check-label" htmlFor="check1">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1"
                               value="something"/>
                    </label>
                </div>
            </div>
            <div>
                <h5 className='d-flex justify-content-end'>מלון</h5>
                <button type="button" className="btn filter-btn dropdown-toggle" data-toggle="dropdown">
                    <span>הכל</span>
                </button>
            </div>
        </div>
    )
};

export default FilterPanel;