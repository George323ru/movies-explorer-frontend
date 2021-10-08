import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project__description">
          <li className="about-project__column">
            <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
            <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__column">
            <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
            <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="about-project__timeline">
          <div className="about-project__timeline-backend">
            <p className="about-project__timeline-part-first">1 неделя</p>
            <p className="about-project__timeline-caption">Back-end</p>
          </div>
          <div className="about-project__timeline-fronend">
            <p className="about-project__timeline-part-second">4 недели</p>
            <p className="about-project__timeline-caption">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;