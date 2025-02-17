import { Typography } from '@alfalab/core-components/typography';
import rocket from '../assets/rocket.png';
import { thxSt } from './style.css';

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <div className={thxSt.box}>
          <img src={rocket} width={48} height={48} />
        </div>
        <Typography.TitleResponsive font="system" tag="h1" view="small" defaultMargins weight="bold">
          Спасибо за участие
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Мы проводим исследование для нового сервиса. Скоро расскажем о нём подробнее, следите за новостями!
        </Typography.Text>
      </div>
    </>
  );
};
export const ThxLayout1 = () => {
  return (
    <>
      <div className={thxSt.container}>
        <div className={thxSt.box}>
          <img src={rocket} width={48} height={48} />
        </div>
        <Typography.TitleResponsive font="system" tag="h1" view="small" defaultMargins weight="bold">
          Ваш выбор важен для нас
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Подробнее про акцию можно узнать в разделе Выгода
        </Typography.Text>
      </div>
    </>
  );
};
