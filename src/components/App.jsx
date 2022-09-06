import { Component } from 'react';
import { getPhoto } from 'utils/api';
import { SearchField } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GlobalStyle } from 'GlobalStyle';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    photos: [],
    request: '',
    page: 1,
    per_page: 12,
    // totalPages: 1,
    largeImageURL: '',
    contentLoad: false,
    showModal: false,
    showLoadMoreBtn: false,
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.request !== this.state.request ||
      prevState.page !== this.state.page
    ) {
      this.getData(this.state.request, this.state.page, this.state.per_page);
    }
  }

  getData = (request, page, per_page) => {
    getPhoto(request, page, per_page).then(r => {
      const totalPages = r.data.totalHits / this.state.per_page;
      if (totalPages > this.state.page) {
        this.setState({ showLoadMoreBtn: true });
      }
      this.setState(prevState => ({
        photos: [...prevState.photos, ...r.data.hits],
        // totalPages: r.data.totalHits / this.state.per_page,
        contentLoad: true,
      }));
    });
  };

  findResponse = e => {
    e.preventDefault();
    this.setState({ request: e.target.findForm.value, page: 1, photos: [] });
    e.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getLargeImg = largeImageURL => {
    this.setState({ showModal: true, largeImageURL: largeImageURL });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="app">
        <SearchField find={this.findResponse} />
        {!this.state.contentLoad && <Loader />}
        <ImageGallery
          photos={this.state.photos}
          getLargeImg={this.getLargeImg}
        />
        {this.state.totalPages > this.state.page && (
          <Button text="Load more" loadMore={this.loadMore} />
        )}
        {this.state.showModal === true && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onClose={this.onCloseModal}
          />
        )}

        <GlobalStyle />
      </div>
    );
  }
}
