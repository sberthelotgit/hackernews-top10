import nock from 'nock';
import { baseUrl, topstoriesEndPoint, itemEndPoint } from '../constants';
import { HNApiService } from './HNApiService';

describe('getTopStories', () => {
  const apiService = new HNApiService();
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  afterEach(nock.cleanAll);
  afterAll(nock.restore);

  it('should return a list of stories', async () => {
    nockTopStories();
    nockItems(stories.length);
    await apiService
      .getTopStories(stories.length)
      .then(res => expect(res.length).toEqual(stories.length));
  });

  it('should limite the number of stories', async () => {
    nockTopStories();
    nockItems(1);
    await apiService
      .getTopStories(1)
      .then(res => expect(res.length).toEqual(1));
  });

  const nockTopStories = () => {
    nock(baseUrl + `/${topstoriesEndPoint}.json`)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('')
      .reply(200, stories);
  };

  const nockItems = maxSize => {
    stories.slice(0, maxSize).forEach(id => {
      nock(baseUrl + `/${itemEndPoint}/${id}.json`)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('')
        .reply(200, { id });
    });
  };
});
