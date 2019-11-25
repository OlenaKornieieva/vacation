import React from 'react';
import HeaderContainer from "../header/header-container/header-container";
import FilterPanel from "../filter-panel/filter-panel";
import FooterContainer from "../footer/footer-container/footer-container";
import ResultsView from "../results-view/results-view";
import SearchPanel from "../search-panel/search-panel";
import SortPanel from "../sort-panel/sort-panel";

const App = () => {
    return (
        <div>
            <HeaderContainer/>
            <SearchPanel/>
            <SortPanel/>
            <FilterPanel/>
            <ResultsView/>
            <FooterContainer/>
        </div>
    )
};
export default App;