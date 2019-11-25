import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';

const FilterPanel = () => {
    return (
        <div className='row d-flex justify-content-end'>
            <div className='col-sm-3'>
                <div className='border-bottom'>
                    סינון תוצאות חיפוש
                </div>
                <div className='border-bottom'>
                    <ReactBootstrapSlider
                        value={1000}
                        // change={100}
                        // slideStop={1000}
                        step={100}
                        max={10000}
                        min={500}
                        reversed={true}
                    />
                </div>
                <div className='border-bottom'>
                    <div className="form-check d-flex justify-content-between">
                        <span>$990</span>
                        <label className="form-check-label" htmlFor="check1">
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <input type="checkbox" className="form-check-input" id="check1" name="option1"
                                   value="something"/>
                        </label>
                    </div>
                    <div className="form-check d-flex justify-content-between">
                        <span>$1130</span>
                        <label className="form-check-label" htmlFor="check2">
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                   value="something"/>
                        </label>
                    </div>
                    <div className="form-check d-flex justify-content-between">
                        <span>$1199</span>
                        <label className="form-check-label">
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <input type="checkbox" className="form-check-input"/>
                        </label>
                    </div>
                    <div className="form-check d-flex justify-content-between">
                        <span>$2060</span>
                        <label className="form-check-label">
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <input type="checkbox" className="form-check-input"/>
                        </label>
                    </div>
                </div>
                <div className='border-bottom'>
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
                <div className='border-bottom'>
                    <div className="form-check d-flex justify-content-end">
                        <span>זמינות</span>
                        <label className="form-check-label" htmlFor="check1">
                            <input type="checkbox" className="form-check-input" id="check1" name="option1"
                                   value="something"/>
                        </label>
                    </div>
                </div>
                <div className='border-bottom'>
                    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                        <span>מלון</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default FilterPanel;