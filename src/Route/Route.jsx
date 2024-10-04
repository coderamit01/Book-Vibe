import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import ListedBook from '../Pages/ListedBook';
import ToRead from '../Pages/ToRead';
import BookDetails from '../Components/BookDetails/BookDetails';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/listed-book',
        loader: () => fetch('../../public/bookData.json'),
        element: <ListedBook />
      },
      {
        path: '/read-book',
        element: <ToRead />
      },
      {
        path: '/bookdetails/:id',
        loader: () => fetch('../../public/bookData.json'),
        element: <BookDetails />
      }
    ]
  }
])

export default Route;