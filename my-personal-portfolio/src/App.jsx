import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* Navigation */}
  <nav className="site-navigation">
    <div className="site-navigation-inner site-container">
      <img src="./images/site-logo.png" alt="site logo" />
      <div className="main-navigation">
        <ul className="main-navigation__ul">
          <li>
            <a href="#">Homepage</a>
          </li>
          <li>
            <a href="#">Page 1</a>
          </li>
          <li>
            <a href="#">Page 2</a>
          </li>
          <li>
            <a href="#">Page 3</a>
          </li>
          <li>
            <a href="#">Page 4</a>
          </li>
        </ul>
      </div>
      <div id="myBtn" className="burger-container" onclick="myFunction(this)">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    </div>
  </nav>
  {/* Navigation end */}
  {/* Top banner */}
  <section className="fh5co-top-banner">
    <div className="top-banner__inner site-container">
      <div className="top-banner__image">
        <img src="./images/top-banner-author.jpg" alt="author image" />
      </div>
      <div className="top-banner__text">
        <div className="top-banner__text-up">
          <span className="brand-span">Hello! I'm</span>
          <h2 className="top-banner__h2">Jhone</h2>
        </div>
        <div className="top-banner__text-down">
          <h2 className="top-banner__h2">Smith</h2>
          <span className="brand-span">Author, Writer, Traveler</span>
        </div>
        <p>
          One Man. One Mission. Can He Go Beyond?One Man. One Mission. Can He Go
          Beyond?
        </p>
        <a href="#" className="brand-button">
          Read bio &gt;{" "}
        </a>
      </div>
    </div>
  </section>
  {/* Top banner end */}
  {/* About me */}
  <section className="fh5co-about-me">
    <div className="about-me-inner site-container">
      <article className="portfolio-wrapper">
        <div className="portfolio__img">
          <img
            src="./images/about-me.jpg"
            className="about-me__profile"
            alt="about me profile picture"
          />
        </div>
        <div className="portfolio__bottom">
          <div className="portfolio__name">
            <span>J</span>
            <h2 className="universal-h2">hone Smith</h2>
          </div>
          <p>
            Jhone Smith is a short story author, novelist, and award-winning
            poet.
          </p>
        </div>
      </article>
      <div className="about-me__text">
        <div className="about-me-slider">
          <div className="about-me-single-slide">
            <h2 className="universal-h2 universal-h2-bckg">About me</h2>
            <p>
              <span>H</span> e has work appearing or forthcoming in over a dozen
              venues, including Buzzy Mag, The Spirit of Poe, and the British
              Fantasy Society journal Dark Horizons. He is also CEO of a
              company, specializing in custom book publishing and social media
              marketing services, have created a community for authors to learn
              and connect.He has work appearing or forthcoming in over a dozen
              venues, including Buzzy Mag, The Spirit of Poe, and have created a
              community for authors to learn and connect.
            </p>
            <h4>Author</h4>
            <p className="p-white">See me</p>
          </div>
          <div className="about-me-single-slide">
            <h2 className="universal-h2 universal-h2-bckg">About me 2</h2>
            <p>
              <span>H</span> e has work appearing or forthcoming in over a dozen
              venues, including Buzzy Mag, The Spirit of Poe, and the British
              Fantasy Society journal Dark Horizons. He is also CEO of a
              company, specializing in custom book publishing and social media
              marketing services, have created a community for authors to learn
              and connect.He has work appearing or forthcoming in over a dozen
              venues, including Buzzy Mag, The Spirit of Poe, and have created a
              community for authors to learn and connect.
            </p>
            <h4>Author</h4>
            <p className="p-white">See me</p>
          </div>
        </div>
      </div>
    </div>
    <div className="about-me-bckg" />
  </section>
  {/* About me end */}
  {/* Books and CD */}
  <section className="fh5co-books">
    <div className="site-container">
      <h2 className="universal-h2 universal-h2-bckg">New Books And CD</h2>
      <div className="books">
        <div className="single-book">
          <a href="#" className="single-book__img">
            <img src="./images/books-1.jpg" alt="single book and cd" />
            <div className="single-book_download">
              <img src="./images/download.svg" alt="book image" />
            </div>
          </a>
          <h4 className="single-book__title">Olivani</h4>
          <span className="single-book__price">$15.00</span>
          {/* star rating */}
          <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          {/* star rating end */}
        </div>
        <div className="single-book">
          <a href="#" className="single-book__img">
            <img src="./images/books-2.jpg" alt="single book and cd" />
            <div className="single-book_download">
              <img src="./images/download.svg" alt="book image" />
            </div>
          </a>
          <h4 className="single-book__title">Molleon’s Life</h4>
          <span className="single-book__price">$22.00</span>
          {/* star rating */}
          <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          {/* star rating end */}
        </div>
        <div className="single-book">
          <a href="#" className="single-book__img">
            <img src="./images/books-3.jpg" alt="single book and cd" />
            <div className="single-book_download">
              <img src="./images/download.svg" alt="book image" />
            </div>
          </a>
          <h4 className="single-book__title">Love is Love</h4>
          <span className="single-book__price">$25.00</span>
        </div>
        <div className="single-book">
          <a href="#" className="single-book__img">
            <img src="./images/books-4.jpg" alt="single book and cd" />
            <div className="single-book_download">
              <img src="./images/download.svg" alt="book image" />
            </div>
          </a>
          <h4 className="single-book__title">Give Me Also</h4>
          <span className="single-book__price">$30.00</span>
        </div>
      </div>
      <div className="books-brand-button">
        <a href="#" className="brand-button">
          View more
        </a>
      </div>
    </div>
  </section>
  {/* Books and CD end */}
  {/* Counter */}
  <div className="fh5co-counter counters">
    <div className="counter-inner site-container">
      <div className="single-count">
        <span className="count" data-count={50}>
          0
        </span>
        <div className="single-count__text">
          <img src="./images/counter-1.png" alt="counter icon" />
          <p>Books</p>
        </div>
      </div>
      <div className="single-count">
        <span className="count" data-count={600}>
          0
        </span>
        <div className="single-count__text">
          <img src="./images/counter-2.png" alt="counter icon" />
          <p>Pages</p>
        </div>
      </div>
      <div className="single-count">
        <span className="count" data-count={2000}>
          0
        </span>
        <div className="single-count__text">
          <img src="./images/counter-3.png" alt="counter icon" />
          <p>Sales</p>
        </div>
      </div>
      <div className="single-count">
        <span className="count" data-count={125}>
          0
        </span>
        <div className="single-count__text">
          <img src="./images/counter-4.png" alt="counter icon" />
          <p>Awards</p>
        </div>
      </div>
    </div>
  </div>
  {/* Counter */}
  {/* Blog */}
  <section className="fh5co-blog">
    <div className="site-container">
      <h2 className="universal-h2 universal-h2-bckg">My Blog</h2>
      <div className="blog-slider blog-inner">
        <div className="single-blog">
          <div className="single-blog__img">
            <img src="./images/blog1.jpg" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>The Journey Under the Waves</h4>
            <span>On August 28, 2015</span>
            <p>
              Quisque vel sapi nec lacus adipis cing bibendum nullam porta lites
              laoreet aliquam.velitest, tempus a ullamcorper et, lacinia mattis
              mi. Cras arcu nulla, blandit id cursus et, ultricies eu leo.
            </p>
          </div>
        </div>
        <div className="single-blog">
          <div className="single-blog__img">
            <img src="./images/blog2.jpg" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>The Journey Under the Waves</h4>
            <span>On August 28, 2015</span>
            <p>
              Quisque vel sapi nec lacus adipis cing bibendum nullam porta lites
              laoreet aliquam.velitest, tempus a ullamcorper et, lacinia mattis
              mi. Cras arcu nulla, blandit id cursus et, ultricies eu leo.
            </p>
          </div>
        </div>
        <div className="single-blog">
          <div className="single-blog__img">
            <img src="./images/blog2.jpg" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>The Journey Under the Waves</h4>
            <span>On August 28, 2015</span>
            <p>
              Quisque vel sapi nec lacus adipis cing bibendum nullam porta lites
              laoreet aliquam.velitest, tempus a ullamcorper et, lacinia mattis
              mi. Cras arcu nulla, blandit id cursus et, ultricies eu leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog end */}
  {/* Quotes */}
  <section className="fh5co-quotes">
    <div className="site-container">
      <div className="about-me-slider">
        <div>
          <h2 className="universal-h2 universal-h2-bckg">
            What People Are Saying
          </h2>
          <p>
            “Pudding croissant cake candy canes fruitcake sweet roll pastry
            gummies sugar plum. Tart pastry danish soufflé donut bear claw
            chocolate cake marshmallow chupa chups. Jelly danish gummi bears
            cake donut powder chocolate cake. Bonbon soufflé lollipop biscuit
            dragée jelly-o. Wafer pastry pudding tiramisu chocolate bar
            croissant cake. Pie caramels gummies danish.”
          </p>
          <img src="./images/quotes.svg" alt="quotes svg" />
          <h4>David Dixon</h4>
          <p>Reader</p>
        </div>
        <div>
          <h2 className="universal-h2 universal-h2-bckg">
            What People Are Saying 2
          </h2>
          <p>
            “Pudding croissant cake candy canes fruitcake sweet roll pastry
            gummies sugar plum. Tart pastry danish soufflé donut bear claw
            chocolate cake marshmallow chupa chups. Jelly danish gummi bears
            cake donut powder chocolate cake. Bonbon soufflé lollipop biscuit
            dragée jelly-o. Wafer pastry pudding tiramisu chocolate bar
            croissant cake. Pie caramels gummies danish.”
          </p>
          <img src="./images/quotes.svg" alt="quotes svg" />
          <h4>David Dixon</h4>
          <p>Reader</p>
        </div>
      </div>
    </div>
  </section>
  {/* Quotes end */}
  {/* Social */}
  <section className="fh5co-social">
    <div className="site-container">
      <div className="social">
        <h5>Follow me!!</h5>
        <div className="social-icons">
          <a href="#" target="_blank">
            <img src="./images/social-twitter.png" alt="social icon" />
          </a>
          <a href="#" target="_blank">
            <img src="./images/social-pinterest.png" alt="social icon" />
          </a>
          <a href="#" target="_blank">
            <img src="./images/social-youtube.png" alt="social icon" />
          </a>
          <a href="#" target="_blank">
            <img src="./images/social-twitter.png" alt="social icon" />
          </a>
        </div>
        <h5>Share it!</h5>
      </div>
    </div>
  </section>
  {/* Social */}
  {/* Footer */}
  <footer className="site-footer">
    <div className="site-container">
      <div className="footer-inner">
        <div className="footer-info">
          <div className="footer-info__left">
            <img src="./images/footer-img.jpg" alt="about me image" />
            <p>Read more about me</p>
          </div>
          <div className="footer-info__right">
            <h5>Get In Touch</h5>
            <p className="footer-phone">Phone: +958734902847</p>
            <p>Email : Jhone@Example.com</p>
            <div className="social-icons">
              <a href="#" target="_blank">
                <img src="./images/social-twitter.png" alt="social icon" />
              </a>
              <a href="#" target="_blank">
                <img src="./images/social-pinterest.png" alt="social icon" />
              </a>
              <a href="#" target="_blank">
                <img src="./images/social-youtube.png" alt="social icon" />
              </a>
              <a href="#" target="_blank">
                <img src="./images/social-twitter.png" alt="social icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-contact-form">
          <h5>Contact Form</h5>
          <form className="contact-form">
            <div className="contact-form__input">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
            </div>
            <textarea defaultValue={""} />
            <input
              type="submit"
              name="submit"
              defaultValue="Submit"
              className="submit-button"
            />
          </form>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="site-container footer-bottom-inner">
        <p>
          © 2019 Author | Design by{" "}
          <a href="https://freehtml5.co/" target="_blank">
            freehtml5.co
          </a>{" "}
          | All rights Reserved.
        </p>
        <div className="footer-bottom__img">
          <img src="./images/footer-mastercard.png" alt="footer image" />
          <img src="./images/footer-paypal.png" alt="footer image" />
          <img src="./images/footer-visa.png" alt="footer image" />
          <img src="./images/footer-fedex.png" alt="footer image" />
          <img src="./images/footer-dhl.png" alt="footer image" />
        </div>
      </div>
    </div>
  </footer>
	<script src="js/jquery.min.js"></script>
	<script src="js/slick.min.js"></script>
	<script src="js/main.js"></script>

  {/* Footer end */}
  {/* Scripts */}
</>

  )
}

export default App
