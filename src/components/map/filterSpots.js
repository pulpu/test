import React from 'react';
import Button from "../forms/button";
import Input from "../forms/input";
import DropDown from "../forms/select";

function FilterSpots(props) {
console.log('props',props)
    return (
        <div className="filter">
            <button onClick={props.show}  className="filter__button btn btn-light border">
                <i className="material-icons mr-2">filter_list</i>
                <span className="align-text-bottom">Filter</span>
            </button>
            <div className={props.condition ? 'filter__wrapper' : 'd-none'}>
                <div className="filter__content">
                    <form onSubmit={props.action}>
                        <div className="mb-2">
                            <Input
                                label="Country"
                                id="county-filter-field"
                                name="countryFilter"
                                onChange={props.commonChange}
                                required={true}
                            />

                        </div>
                        <div className="mb-2">
                            <DropDown
                                name="windFilter"
                                action={props.windChange}
                                required={true}
                                values={props.windArray}
                            />
                        </div>
                        <div className="text-center pt-2" >
                            <Button
                                title={'Apply Filter'}
                                class={'btn shadow-sm px-3 m-2 bg-white text-uppercase border'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FilterSpots;
