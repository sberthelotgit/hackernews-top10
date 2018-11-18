import React from 'react';
import {
  baseUrl,
  itemEndPoint,
  topstoriesEndPoint,
  defaultTopSize,
  defaultTopCommentSize
} from '../constants';

export const extractTopCommentFromStory = story => {
  return story.kids ? story.kids.slice(0, defaultTopCommentSize) : [];
};

/**
 * This service allow simple HN Api data fetch.
 */
export class HNApiService {
  /**
   * Return the top stories from the HN Api
   * @param {number} topSize Used to limit result
   */
  getTopStories(topSize = defaultTopSize) {
    return fetch(`${baseUrl}/${topstoriesEndPoint}.json`)
      .then(res => res.json())
      .then(topStories => topStories.slice(0, topSize))
      .then(topStories => topStories.map(this.getItem))
      .then(topStories => Promise.all(topStories))
      .catch(console.error);
  }

  /**
   * fetch the comment from a given commentId
   * @param {number} commentId
   */
  getComment(commentId) {
    return this.getItem(commentId);
  }

  /**
   * Call the HN API to fetch the item of the given id
   * @param {number} itemId
   */
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
