import * as React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Image from 'material-ui-image';
import './picturesGrid.scss';

interface IPictureGridProps {
    picturesUrls: string[]
}

interface IPictureGridSate {
    picturesUrls: string[]
}

export default class PicturesGrid extends React.PureComponent<IPictureGridProps, IPictureGridSate> {
    constructor(props: IPictureGridProps) {
        super(props);
        this.state = {
            picturesUrls: this.props.picturesUrls
        };
    }

    render() {
        return(
        <div className='search_results'>
            <GridList cols={3} cellHeight={330}>
                {this.state.picturesUrls.map((item, iterator) => (
                <GridListTile key={iterator}>
                    <Image 
                        src={item}
                        animationDuration={5000}/>
                </GridListTile>))}
            </GridList>
        </div>);
    };

    componentDidUpdate(prevProps: IPictureGridProps) {
        if (this.props.picturesUrls[0] !== prevProps.picturesUrls[0])
        {
            this.setState({ picturesUrls: this.props.picturesUrls })
        }
    }
}