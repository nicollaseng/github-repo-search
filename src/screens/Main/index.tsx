import React, {useState} from 'react';
import {StatusBar} from 'react-native';

// Redux
import {connect} from 'react-redux';
import {fetch_repositories} from '../../redux/actions/repositories';

//  Components
import {
  Title,
  Thumbnail,
  Repository,
  Creator,
  IconVector as Icon,
  Container,
  Description,
  List,
  ListItem,
  SafeArea,
  Placeholder,
  PlaceholderText,
} from './styles';
import Loader from '../../components/Loader';
import Searchbar from '../../components/Searchbar';

// locales
import {translate} from '../../locales';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {Actions} from 'react-native-router-flux';

const Main = (props: any = {}) => {
  const [loading, setLoading] = useState(false);
  const [param, setParam] = useState('');

  const fetchRepositories = async (): Promise<void> =>
    await props.fetch_repositories(param);

  const handleInput = (text: string) => setParam(text);

  const handleNavigation = (url: string) => Actions.repo({url});

  const handleSearch = () => {
    setLoading(true);
    fetchRepositories();
    setTimeout(() => setLoading(false), 2000);
  };

  const _renderList = () => {
    const {repositories} = props;
    if (repositories.length > 0) {
      return repositories.map((repository: any = {}) => {
        const {name, owner} = repository;
        return (
          <ListItem onPress={() => handleNavigation(repository.html_url)}>
            <Thumbnail source={{uri: repository.owner.avatar_url}} />
            <Description>
              <Creator>{name}</Creator>
              <Repository>{owner.login}</Repository>
            </Description>
            <Icon name="chevron-right" size={17} />
          </ListItem>
        );
      });
    } else {
      return (
        <Placeholder>
          <PlaceholderText>
            {translate(['placeholder', 'empty'])}
          </PlaceholderText>
        </Placeholder>
      );
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {isIphoneX && <SafeArea />}
      <Container>
        <Title>{translate(['title', 'recent'])}</Title>
        <Searchbar
          value={param}
          handleInput={handleInput}
          handleSearch={handleSearch}
        />
        <List>{!loading ? _renderList() : <Loader />}</List>
      </Container>
    </>
  );
};

const mapStateToProps = (state: any = {}) => ({
  repositories: state.repositories.repositories,
});

const mapStateToDispatch = {
  fetch_repositories,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Main);
