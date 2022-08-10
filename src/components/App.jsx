import React, { Component } from 'react';
import { getImages } from '../services/api';
import { mapperImages } from './Utils/mapper';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { perPage } from '../services/api';
import { AppStyle } from './App.styled';
import { Loader } from './Loader/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export class App extends Component {
  state = {
    page: 1,
    queryValue: '',
    images: [],
    status: Status.IDLE,
    imageModal: '',
    hasNextPage: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { queryValue, page } = this.state;
    // console.log('prevState.page: ', prevState.page);
    // console.log('page: ', page);
    // console.log('prevState.queryValue: ', prevState.queryValue);
    // console.log('queryValue: ', queryValue);
    if (queryValue !== prevState.queryValue || page !== prevState.page) {
      // console.log('Изменился queryValue');

      this.setState({ status: Status.PENDING });
      this.fetchImages(queryValue, page);
    }
  }

  fetchImages = (queryValue, page) => {
    console.log(page);
    console.log(queryValue);
    //---------------------  isLoading: true  ----------------------------
    this.setState({ isLoading: true });

    getImages(queryValue, page)
      .then(data =>
        this.setState(prevState => ({
          images: [...prevState.images, ...mapperImages(data.hits)],
          status: Status.RESOLVED,
          hasNextPage: page * perPage < data.total,
        }))
      )
      .catch(error => console.log(error))
      .finally(() => {
        //---------------------  isLoading: false  ----------------------------
        this.setState({ isLoading: false });
      });
  };

  handleSearchBarSubmit = queryValue => {
    console.log(queryValue);
    this.setState({ queryValue, page: 1, images: [] });
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = imageLargeModal => {
    this.setState({ imageModal: imageLargeModal });
  };

  closeModal = () => {
    this.setState({ imageModal: '' });
  };

  render() {
    const { images, imageModal, hasNextPage, isLoading } = this.state;

    return (
      <AppStyle>
        {isLoading && <Loader />}

        <Searchbar onSubmitApp={this.handleSearchBarSubmit} />
        <ImageGallery images={images} onLargeImage={this.openModal} />
        {imageModal && (
          <Modal imageLargeModal={imageModal} closeModal={this.closeModal} />
        )}
        {hasNextPage && (
          <Button
            text="Load more"
            handleClick={this.incrementPage}
            isLoading={isLoading}
          />
        )}
      </AppStyle>
    );
  }
}

//-----------------------------
