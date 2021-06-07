import '../assets/scss/content.scss';
import Header from './utils/Header'
import { Switch, Route } from 'react-router-dom'
import CardScreen from './CardScreen'
import SearchScreen from './SearchScreen'
import ArtistProfile from './ArtistProfile'

function Content() {
    return (
        <>
            <Header />
            <div className="bg-content">
                <CardScreen />
                {/* <SearchScreen /> */}
                {/* <ArtistProfile /> */}
            </div>
        </>
    );
}

export default Content;