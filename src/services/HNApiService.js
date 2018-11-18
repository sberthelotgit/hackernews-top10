import React from 'react';
import {
  baseUrl,
  itemEndPoint,
  topstoriesEndPoint,
  defaultTopSize
} from '../constants';

export class HNApiService {
  fetchTopStorie(topSize = defaultTopSize) {
    return fetch(`${baseUrl}/${topstoriesEndPoint}.json`)
      .then(res => res.json())
      .then(topStories => topStories.slice(0, topSize))
      .then(topStories => topStories.map(this.getItem))
      .then(topStories => Promise.all(topStories))
      .catch(console.error);
  }

  getComment(commentId) {
    return this.getItem(commentId);
  }

  async getItem(itemId) {
    try {
      const item = await fetch(`${baseUrl}/${itemEndPoint}/${itemId}.json`);
      return item.json();
    } catch (error) {
      console.error(error);
    }
  }
}

const globalHNService = new HNApiService();

/**
 * Use this higher order component in order to inject HNApiService to the wrapped component
 */
export const withHNApiService = InjectedComponent => {
  return class extends React.Component {
    render() {
      return (
        <InjectedComponent {...this.props} hnApiService={globalHNService} />
      );
    }
  };
};
