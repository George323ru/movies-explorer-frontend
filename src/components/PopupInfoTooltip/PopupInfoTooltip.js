import "./PopupInfoTooltip.css";
import popupInfoError from '../../images/popupInfoError.svg';
import "./_opened/popup_opened.css";

const PopupInfoTooltip = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen && "popup_opened"} `}>
      <div className='popup__container'>
        <div className='popup__info-tooltip'>
          <img
            src={popupInfoError}
            alt="Картинка ошибки"
          />
          <h2 className='popup__title 
          popup__title_text-align_center 
          popup__title_margin_top'>
            Что-то пошло не так!
            Возможно, пользователь с такими именем и E-mail уже существует.
          </h2>
          <button
            onClick={onClose}
            className='popup__closeButton'
          />
        </div>
      </div>
    </div>
  )
}

export default PopupInfoTooltip