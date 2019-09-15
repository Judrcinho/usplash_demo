import * as React from "react";
import ChipInput from 'material-ui-chip-input';
import Fab from '@material-ui/core/Fab';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import './search.scss';

interface ISearchProps {
    searchImages: Function
}

interface ISearchState {
    tags: string[]
}
export default class Search extends React.PureComponent<ISearchProps, ISearchState> {
    constructor(props: Readonly<ISearchProps>) {
        super(props);
        this.state = {
            tags: ['summer', 'beach']
        };
    }

    saveSearchTerms = (data: string[]) => {
        this.setState({tags: data});
    }

    render() {
        return(
        <div className='search_component'>
            <ChipInput 
                newChipKeyCodes = {[32, 13]}
                helperText = "Type tags to search for images" 
                defaultValue={['summer', 'beach']}
                onChange = {(data) => { this.saveSearchTerms(data)} }/>
                <Fab 
                    variant="extended" 
                    color="primary" 
                    aria-label="add"
                    onClick = {() => { this.props.searchImages(this.state.tags) }}>
                        <ImageSearchIcon />
                    Search
                </Fab>
        </div>);
    }
}
