import React from 'react';
import { compose, withState, withHandlers, withProps, lifecycle, branch, renderComponent } from 'recompose';
import clip from '../assets/video.mp4';
import Title from './Title';
import styled from 'styled-components';
// eslint-disable-next-line
import icon from '../css/icon.css';
// eslint-disable-next-line
import style from '../css/style.css';


const VideoClip = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  minWidth: 100%;
  minHeight: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.4;
`

const Wrapper = styled.div`
  background: #4e4e4e;
  height: 100vh;
`

const withUserData = lifecycle({
  getInitialState() {
    return { loading: true };
  },
  componentDidMount() {
    fetchData().then((data) =>
      this.setState({ loading: false, ...data }));
  }
});

const Spinner = () =>
  <div className="Spinner">
    <div className="loader">Loading...</div>
  </div>;

const isLoading = ({ loading }) => loading;

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
);

const enhance = compose(
  withUserData,
  withSpinnerWhileLoading
);

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ clip:{clip} }), 1500);
  });
}

const withToggle = compose(
  withState('muted', 'toggle', 'selector', true),
  withHandlers({
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  }),
  withProps(({ muted }) => {
    return {
      selector: muted ? 'icon-volume-mute2' : 'icon-volume-high',
    };
  })
)

const VideoCrep = enhance(({ muted }) =>
  <Wrapper>
    <VideoClip muted={muted} autoPlay loop>
      <source src={clip} type="video/mp4"></source>
    </VideoClip>
  </Wrapper>
);

const Status = withToggle(({ muted, toggle, selector }) =>
  <div>
    <VideoCrep muted={ muted } autoPlay loop />
  </div>
);

const Video = () => (
  <div>
    <Status />
    <Title />
  </div>
);

export default Video;
