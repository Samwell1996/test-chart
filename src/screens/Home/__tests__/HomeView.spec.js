import HomeView from '../HomeView';
import renderer from 'react-test-renderer';

test('render ui HomeScreen', () => {
  it('make snapshot for HomeScreen', () => {
    expect(HomeView).toMatchSnapshot();
  });
  it('renders HomeScreen correctly!', () => {
    renderer.create(<HomeView />);
  });
});
