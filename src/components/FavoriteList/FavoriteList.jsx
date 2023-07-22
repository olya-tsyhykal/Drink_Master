import { useSelector } from 'react-redux';
import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectFavorite } from 'redux/selectors';
import { FavoriteListStyled, Section } from './FavoriteList.styled';
import { Container } from 'components';

export const FavoriteList = () => {
  const favoriteCocktails = useSelector(selectFavorite);

  return (
    <Section>
      <Container>
        <FavoriteListStyled>
          {Array.isArray(favoriteCocktails) ? (
            favoriteCocktails.map(favoriteCocktails => (
              <DrinkCard
                key={favoriteCocktails._id}
                page={'favorite'}
                cocktail={favoriteCocktails}
              />
            ))
          ) : (
            <p>Not found</p>
            // <NotFound message={"You haven't added any cocktail recipes yet"} />
          )}
        </FavoriteListStyled>
      </Container>
    </Section>
  );
};
