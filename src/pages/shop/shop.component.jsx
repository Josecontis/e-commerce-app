import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionsPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionsPage);

//questo metodo serve ad applicare lo stesso stile(shop-page) a CollectionsOverview(ovvero le preview dei primi 4 items) e CollectionPage(ovvero le pagine con tutti gli item)
//questa classe preleverà i dati dal database e li assegnerà alle componenti
class ShopPage extends React.Component {
  constructor(){
    super();

    this.state = {
      loading: true
    }
  }
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    //prelevo i dati dal database che si aggiorneranno ogni volta che farà il render
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    });
  }

  render() {
    const { match } = this.props;
    const {loading} = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading}{...props}/>} />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionsPageWithSpinner isLoading={loading}{...props}/>}
        />{/*collectionId: HATS, JACKETS.. e match.path è il percorso base es. localhost..*/}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);