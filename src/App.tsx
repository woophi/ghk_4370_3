import { TagMobile } from '@alfalab/core-components/tag/mobile';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import bg from './assets/bg.png';
import cup from './assets/cup.png';
import klv from './assets/klv.png';
import lav from './assets/lav.png';
import pere from './assets/pere.png';
import pet from './assets/pet.png';
import ya from './assets/ya.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout, ThxLayout1 } from './thx/ThxLayout';
const data = [
  {
    title: 'Яндекс Еда',
    titleRight: 'до 10%',
    subtitle: 'За оплату картой онлайн',
    subtitle2: 'До 28 февраля',
    img: ya,
    analytics: '4370_yandex_eda_var3',
  },
  {
    title: 'Бигфест',
    titleRight: 'до 50%',
    subtitle: 'До 9 марта',
    subtitle2: '',
    img: bg,
    analytics: '4370_bigfest_var3',
  },
  {
    title: 'Перекрёсток Доставка',
    titleRight: 'до 20%',
    subtitle: 'До 28 февраля',
    subtitle2: '',
    img: pere,
    analytics: '4370_perek_var3',
  },
  {
    title: 'Пятёрочка Доставка',
    titleRight: 'до 10%',
    subtitle: 'До 28 февраля',
    subtitle2: '',
    img: pet,
    analytics: '4370_pyaterka_var3',
  },
  {
    title: 'Купер',
    titleRight: 'до 20%',
    subtitle: 'До 28 февраля',
    subtitle2: '',
    img: cup,
    analytics: '4370_kuper_var3',
  },
  {
    title: 'КуулКлевер',
    titleRight: 'до 7%',
    subtitle: 'До 28 февраля',
    subtitle2: '',
    img: klv,
    analytics: '4370_cuulklever_var3',
  },
  {
    title: 'Яндекс Лавка',
    titleRight: '500₽',
    subtitle: 'За оплату картой онлайн',
    subtitle2: 'До 28 февраля',
    img: lav,
    analytics: '4370_yandex_lavka_var3',
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [thxShow1, setThx1] = useState(false);

  const submit = () => {
    window.gtag('event', '4370_map_var3');
    setLoading(true);
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };
  const submitOnRow = (analytcis: string) => {
    window.gtag('event', analytcis);

    setLoading(true);
    LS.setItem(LSKeys.ShowThx, true);
    setThx1(true);
    setLoading(false);
  };

  if (thxShow1) {
    return <ThxLayout1 />;
  }

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.rowTitle}>
          <div>
            <Typography.TitleResponsive tag="h1" view="medium" font="system" weight="medium">
              Кэшбэк от партнёров
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium">Добавили новые категории для вас</Typography.Text>
          </div>
        </div>
        <div>
          <TagMobile disabled={loading} size="xxs" shape="rounded" checked>
            Списком
          </TagMobile>
          <TagMobile
            disabled={loading}
            style={{ marginLeft: '.5rem' }}
            size="xxs"
            shape="rounded"
            onClick={submit}
            view="filled"
          >
            На карте
          </TagMobile>
        </div>
        {data.map(item => (
          <div className={appSt.row} key={item.title} onClick={() => submitOnRow(item.analytics)}>
            <img width={48} height={48} src={item.img} />
            <div style={{ width: '100%' }}>
              <div className={appSt.rowTitle}>
                <Typography.Text view="component-primary" style={{ marginRight: 'auto' }}>
                  {item.title}
                </Typography.Text>
                <Typography.Text view="component-primary">{item.titleRight}</Typography.Text>
              </div>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary">
                {item.subtitle}
              </Typography.Text>
              {item.subtitle2 && (
                <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary">
                  {item.subtitle2}
                </Typography.Text>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
