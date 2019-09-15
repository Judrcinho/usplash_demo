import IImageSizes from './imageSizes';
export default interface IUnsplashImage {
    width: number,
    height: number,
    description: string,
    urls: IImageSizes
}