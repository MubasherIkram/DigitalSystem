import styled from 'styled-components';
// import MEDIA from 'helpers/mediaTemplates';

export const VideoWrapper = styled.div`
  width: 560px;
  height: 315px;
  max-width: 90%;
  max-height: calc(90vw / 1.618);
  margin: auto;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
