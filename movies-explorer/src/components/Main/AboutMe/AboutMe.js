import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">О проекте</h2>
        <div className="about-me__presentation-wrap">
          <div className="about-me__presentation">
            <p className="about-me__name">Георгий</p>
            <p className="about-me__job">Фронтенд-разработчик, 32 года</p>
            <p className="about-me__story">Учился год на фронтенд-разработчика в Яндекс.Практикуме. Сейчас ищу работу по этой специальности. Увлекаюсь когнитивыми науками, бегом и практиками осознанности. Работаю в типографии.</p>
            <div className="about-me__links">
              <a className="about-me__link">Facebook</a>
              <a className="about-me__link">Github</a>
            </div>
          </div>
          <div className="about-me__foto"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;