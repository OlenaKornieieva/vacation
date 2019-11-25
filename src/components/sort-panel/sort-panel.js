import React from 'react';
import './sort-panel.css';

const SortPanel = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-9 d-flex justify-content-between'>
                    <div className='col-sm-4 mr-1 ml-1 hotels-type d-flex flex-column'>
                        <div className='d-flex justify-content-end'>
                            <span>הכי משתלם</span>
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
                    <div className='col-sm-4 mr1 hotels-type d-flex flex-column'>
                        <div className='d-flex justify-content-end'>
                            <span>הכי פופולרי</span>
                            <i className="far fa-star"/>
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
                    <div className='col-sm-4 mr-1 ml-1 hotels-type d-flex flex-column'>
                        <div className='d-flex justify-content-end'>
                            <span>הכי זול</span>
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
            </div>

            <div className='col-sm-9 d-flex justify-content-between'>
                <div>
                    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                        <span>מחיר, מהנמוך לגבוה</span>
                    </button>
                    <span>:מיין תוצאות לפי</span>
                </div>
                <span>נמצאו 34 תוצאות חיפוש</span>
            </div>
        </div>
    )
};

export default SortPanel;