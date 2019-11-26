import React from 'react';
import './sort-panel.css';

const SortPanel = () => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div className='col-sm-4 hotels-type d-flex flex-column'>
                    <div className='d-flex justify-content-end align-items-center'>
                        <span className='pr-1'>הכי משתלם</span>
                        <i className="far fa-thumbs-up"/>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <span>$1199</span>
                        <div>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4 hotels-type d-flex flex-column'>
                    <div className='d-flex justify-content-end align-items-center'>
                        <span className='pr-1'>הכי פופולרי</span>
                        <i className="far fa-star text-white"/>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <span>$1238</span>
                        <div>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4 hotels-type d-flex flex-column'>
                    <div className='d-flex justify-content-end align-items-center'>
                        <span className='pr-1'>הכי זול</span>
                        <i className="fas fa-comment-dollar"/>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <span>$1130</span>
                        <div>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between text-white mt-3 mb-3'>
                <div>
                    <select className='border-right-0 rounded-0 border-secondary'>
                        <option value="1">מחיר, מהנמוך לגבוה</option>
                    </select>
                    <span className='pl-1'>:מיין תוצאות לפי</span>
                </div>
                <span className='search-result'>נמצאו 34 תוצאות חיפוש</span>
            </div>
        </div>
    )
};

export default SortPanel;