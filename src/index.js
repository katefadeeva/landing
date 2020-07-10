import { Article } from './js/Article';
import { ArticleModal } from './js/ArticleModal';
import { Modal } from './js/Modal';

const data = [
  {
    id: 1,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/1.jpg',
    tags: ['Art', 'Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 2,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategies/2.jpg',
    tags: ['Culture'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 3,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategies/3.jpg',
    tags: ['Culture', 'Design', 'Art'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 4,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/5.jpg',
    tags: ['Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 5,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/5.jpg',
    tags: ['Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 6,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/1.jpg',
    tags: ['Art', 'Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 7,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategies/2.jpg',
    tags: ['Culture'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 8,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategies/3.jpg',
    tags: ['Culture', 'Design', 'Art'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
];

window.onload = function() {

  // Render Articles
  if(data) {
    renderArticlesToDom();
  };

  // Tags
  addTagsClickHandler();

  // Mobile Menu
  openedHamburger ();
};

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);
      if (clickedTag.innerText === 'All') {
        showAllStrategies();
      } else {
        filterStrategyBySelectedTag(clickedTag.innerText);
      };
    };
  });
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach(tag => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add('tag_selected');
  clickedTag.classList.remove('tag_bordered');
};

const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.remove('strategy_hidden');
  });
};

const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.tag').forEach(tag => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy_hidden');
      };
    });
  });
};

const renderArticlesToDom = () => {
  let strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach(article => {
    strategiesWrapper.append(article.generateArticle())
  });

  addStrategyClickHandler();
};

const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector('.strategy-wrapper');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
};

const generateArticles = (data) => {
  let articles = [];
  data.forEach(article => {
    articles.push(new Article(article))
  });
  return articles;
};

const addStrategyClickHandler = () => {
  document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
    if (e.target.closest('.strategy')) {
      let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
      let clickedStrategyData = getClickedData(clickedStrategyId);

      renderArticleModalWindow(clickedStrategyData);
    };
  });
};

const getClickedData = (id) => {
  return data.find(article => article.id == id);
};

const renderArticleModalWindow = (content) => {
  let modal =  new ArticleModal ('article-modal', content);
  modal.renderModal();
};

const openedHamburger = () => {
  let menuBtn = document.querySelector('.hamburger');
  let headerNavigation = document.querySelector('.header__navigation');
  let headerBtn = document.querySelector('.header__buttons');

  let menuIconClosed = 'header__hamburger hamburger';
  let menuIconOpened = 'header__hamburger hamburger hamburger_opened';
  let headerNavClosed = 'header__navigation header__navigation_closed';
  let headerNavOpened = 'header__navigation header__navigation_opened';
  let headerBtnClosed = 'header__buttons';
  let headerBtnOpened = 'header__buttons header__buttons_opened'

  menuBtn.addEventListener('click', () => {
    if(menuBtn.className == menuIconClosed) {
      menuBtn.className = menuIconOpened;
      headerNavigation.className = headerNavOpened;
      headerBtn.className = headerBtnOpened;
      document.querySelector('.hamburger__line').style.display = 'none';
      document.querySelector('body').style.overflow = 'hidden';
    } else if(menuBtn.className == menuIconOpened) {
      menuBtn.className = menuIconClosed;
      headerNavigation.className = headerNavClosed;
      headerBtn.className = headerBtnClosed;
      document.querySelector('.hamburger__line').style.display = 'block';
      document.querySelector('body').style.overflow = 'visible';
    }
  });
}