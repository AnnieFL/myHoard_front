import {LoadingPage, LoadingImage} from '../../styled';
import images from "../../config/constants";

export default function Loading() {
    return (
        <LoadingPage>
            <LoadingImage src={images.loading} />
        </LoadingPage>
    )
}