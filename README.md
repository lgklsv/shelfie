# Shelfie

[Shelfie](https://github.com/lgklsv/shelfie) is a simple
digital library app. Here you can find almost every book you want. We use google books API to search. This project was created as a task on [RS School React course](https://rs.school/react/).

## Key features

- books search using google books API
- responsive design (up to iphone SE support)
- suggest a book to the library with new form
- notification popup
- [feature sliced design](https://feature-sliced.design/) architecture
- state management with Redux / api calls with RTK query
- (⚙️ new) Server-side rendering with React 18

## Screenshot

![image](https://user-images.githubusercontent.com/101424508/230730175-70290ba4-3a67-4978-836e-ac7611a9f626.png)

## Tech stack

- React
- Redux / RTK Query
- Scss
- MDX
- Vite, Vitest, React Testing Library

## 3-rd party API

[Google Books API](https://developers.google.com/books/docs/v1/using)

## How run locally

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/lgklsv/shelfie.git

# Go into the repository and install dependencies
$ npm install

# Start the project
$ npm run dev

# To run tests with coverage
$ npm run coverage
# For more commands read package.json
```
