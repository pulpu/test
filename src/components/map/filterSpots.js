import React from 'react';

function FilterSpots(props) {

    return (
        <div className="filter">
            <button onClick={props.action}  className="filter__button btn btn-light border">
                <i className="material-icons mr-2">filter_list</i>
                <span className="align-text-bottom">Filter</span>
            </button>
            <div className="filter__modal">
                <div className="modal fade bd-example-modal-sm show" tabIndex="-1">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="form-group">
                                <label htmlFor="county-filter-field">Example label</label>
                                <input type="text" className="form-control" id="county-filter-field" placeholder="Country"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterSpots;
