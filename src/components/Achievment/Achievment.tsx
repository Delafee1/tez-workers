import * as React from 'react';
import cn from 'classnames';
import s from './Achievment.module.scss'

type Props = {
  title: React.ReactNode;
  text: React.ReactNode;
  image: string;
  disabled?: boolean;
  className?: string;
  color?: string;
}

const Achievment: React.FC<Props> = ({title, text, image, disabled, color = 'blue', className}) => {
  return (
    <div className={cn(s.wrapper, className, disabled && s.wrapper_disabled, s[`wrapper_${color}`])}>
      <div className={s.title}>{title}</div>
      <div className={s.bottom}>
        <div className={s.image} style={{ backgroundImage: `url(${image})` }} />
        <div className={s.text}>{text}</div>
      </div>
    </div>
  )
}

export default Achievment;