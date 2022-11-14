import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/react-toastify';
import { Container } from './App.Styled';
import { fetchImages } from "Api/Api";
import { mapPictures } from "Api/mapPictures";
import Searchbar from "components/Searchbar";
import ImageGallary from "components/ImageGallary";
import Button from "components/Button";
import Modal from "components/Modal";
import Loader from "components/Loader";

class App extends Component {
  state = {
    inputValue: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: null,
    error: null,
  };
  componentDidUpdate(_, prevState) {
    const prevSearch = prevState.inputValue;
    const currentSearch = this.state.inputValue;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    if (prevSearch !== currentSearch || prevPage !== currentPage) {
      this.updateImages();
    }
  }
  
}