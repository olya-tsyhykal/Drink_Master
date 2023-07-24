import { Paginator, MainPageTitle, Container } from 'components';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { PageWrapFavorite } from './FavoritePage.styled';
import { selectPage } from 'redux/selectors';
import { useEffect } from 'react';

const FavoritePage = () => {
  const despatch = useDispatch();
  const page = useSelector(selectPage);
  despatch(getAllFavoriteDrinksThunk(page));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapFavorite>
      <Container>
        <MainPageTitle title={'Favorites'} />
        <FavoriteList />
        <Paginator />
      </Container>
    </PageWrapFavorite>
  );
};

export default FavoritePage;
