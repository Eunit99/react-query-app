# How to Use React Query to Simplify Data Fetching

## What is React Query library

React Query is a [ReactJS](https://reactjs.org/) preconfigured data management library which gives you power and control over server-side state management, fetching, and caching of data, and error handling in a simple and declarative way without affecting the global state of your application.

Server data is asynchronous - it can easily be outdated, this is because the data is not stored in your React application. This is where React Query shines, to allow you to manipulate the asynchronous data, cache it, and also, update or synchronize it.

There is absolutely no point trying to re-invent the wheel by trying to write your code that will handle caching, optimistic UI updates, and other handy features. There are a handful of libraries that provides these features out of the box.

## Features of React Query

Aside from the benefits discussed already, [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/), you should consider using this library for your next project because of the following reasons:

- **Caching**: Window focus refetching – This allows React Query to pre-fetch data depending on your application activity
- **Request retry**: Ability to set the number of request retries in the event of errors.
- [**Prefetching**](https://react-query.tanstack.com/guides/prefetching) – React Query is able to pre-fetch data depending if your application needs fresh data after an update request. React Query is able to update your data in the background.
- [**Optimistic updates**](https://react-query.tanstack.com/guides/optimistic-updates) React Query is able to handle complex caching so that your application is fully optimized.

## Example Result of Fetching

![ReactQuery example](https://i.postimg.cc/mrJ7Q9bD/React-Query-example.gif)

## Read More

Check out the full article on the [Purecode AI](https://purecode.ai/blogs/react-query) blog 👉 [https://purecode.ai/blogs/react-query](https://purecode.ai/blogs/react-query)