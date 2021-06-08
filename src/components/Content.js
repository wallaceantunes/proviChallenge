import '../assets/scss/content.scss';
import Header from './utils/Header'
import { Route, Switch } from 'react-router-dom'
import CardScreen from './CardScreen'
import SearchScreen from './SearchScreen'
import ArtistProfile from './ArtistProfile'

function Content() {
    return (
        <>
            <Header />
            <div className="bg-content">
                    <Route exact path="/app/">
                        <CardScreen />
                    </Route>
                    <Route path="/app/busca">
                        <SearchScreen />
                    </Route>
                    <Route path="/app/perfil">
                        <ArtistProfile />
                    </Route>
            </div>
        </>
    );
}

export default Content;