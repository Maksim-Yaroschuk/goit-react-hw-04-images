import { Component } from 'react';
import { getPhoto } from 'utils/api';
import { SearchField } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GlobalStyle } from 'GlobalStyle';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    photos: [],
    request: '',
    page: 1,
    per_page: 12,
    totalPages: 1,
    contentLoad: false,
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
      this.setState(prevState => ({
        photos: [...prevState.photos, ...r.data.hits],
        totalPages: r.data.totalHits / this.state.per_page,
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

  render() {
    return (
      <div className="app">
        <SearchField find={this.findResponse} />
        {!this.state.contentLoad && <Loader />}
        <ImageGallery photos={this.state.photos} />
        {this.state.totalPages > this.state.page && (
          <Button text="Load more" loadMore={this.loadMore} />
        )}

        <GlobalStyle />
      </div>
    );
  }
}
