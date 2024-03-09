'use strict';

import { data } from './data';
import { Subscription } from './types/SubscriptionType';

export async function GET(request: Request) {
  try {
    if (request.method !== 'GET') {
      return new Response('Only GET allowed', {
        status: 405,
      });
    }
    // ex: /api/mocks/subcriptions?results=10
    const url = new URL(request.url);
    const results = url.searchParams.get('results');
    // もしNumberに変換できない文字列が渡された場合は、NaNが返る
    if (Number.isNaN(results)) {
      return new Response(
        'results query parameter is invalid',
        {
          status: 400,
        }
      );
    }

    const mockData: Subscription[] = data;
    const numResults = Number(results);
    if (numResults) {
      const sliceNum =
        numResults > mockData.length
          ? mockData.length
          : numResults;

      return new Response(
        JSON.stringify(mockData.slice(0, sliceNum)),
        {
          status: 200,
        }
      );
    } else {
      return new Response(JSON.stringify(mockData), {
        status: 200,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response('400 failed.', {
      status: 400,
    });
  }
}
