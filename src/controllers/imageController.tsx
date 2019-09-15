import * as React from 'react';
import { RequestHandler } from '../services/requestHandler';
import Search from '../components/search/search';
import IUnsplashImage from '../interfaces/image';
import PicturesGrid from '../components/picturesGrid/picturesGrid';

interface IImageControllerState {
    page: number,
    imagesToShow: string[]
}
export default class ImageController extends React.PureComponent<{}, IImageControllerState> {
    requestHandler: RequestHandler = new RequestHandler("https://api.unsplash.com/");

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = { 
            page: 1,
            imagesToShow: []
        };
    }

    searchImages = async (tags: string[]) => {
        let images: Array<IUnsplashImage> = (await this.requestHandler.get("search/photos?page="+ this.state.page + 
                                                         "&query=" + tags.join(',') + 
                                                         "&client_id=" + this.requestHandler.client_id + 
                                                         "&per_page=12")).results as Array<IUnsplashImage>;
        this.setState({
            imagesToShow: images.map(item => item.urls.small)
        });
    }

    render() {
        return(
        <div>
            <Search searchImages={ this.searchImages }/>
            <PicturesGrid picturesUrls={ this.state.imagesToShow} />
        </div>)
    }

    componentWillMount() {
        this.searchImages(['summer', 'beach']);
    }
}