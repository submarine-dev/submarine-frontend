import { CSSProperties, FC, ReactNode } from 'react';

type ColorString =
  | 'primary'
  | 'secondary'
  | 'secondary-dark'
  | 'white'
  | 'black';

type Props = {
  children: ReactNode;
  color?: ColorString;
  isCenter?: boolean;
  className?: string;
  style?: CSSProperties;
};

const colorFn = (color?: ColorString): string => {
  return color ? `text-${color}` : '';
};

const centerFn = (isCenter?: boolean): string => {
  return isCenter ? 'text-center' : '';
};

/**
 * TODO:スタイル未調整！！！！！！
 */

/**
 * H1
 * - font-size: 56px
 * - font-weight: bold
 * - line-height: 84px
 */
export const H1: FC<Props> = ({
  children,
  color,
  isCenter,
  className,
  style,
}) => {
  return (
    <h1
      style={{
        fontWeight: 'bold',
        ...style,
      }}
      className={`text-3xl ${colorFn(color)} ${centerFn(
        isCenter
      )} ${className}`}
    >
      {children}
    </h1>
  );
};

/**
 * TODO:スタイル未調整！！！！！！
 */

/**
 * H2
 * - font-size: 48px
 * - font-weight: bold
 * - line-height: 72px
 */
export const H2: FC<Props> = ({
  children,
  color,
  isCenter,
  className,
  style,
}) => {
  return (
    <h2
      style={{
        fontWeight: 'bold',
        ...style,
      }}
      className={`text-2xl scroll-m-20 ${colorFn(
        color
      )} ${centerFn(isCenter)} ${className}`}
    >
      {children}
    </h2>
  );
};

/**
 * TODO:スタイル未調整！！！！！！
 */

/**
 * H3
 * - font-size: 30px
 * - font-weight: bold
 * - line-height: 45px
 */
export const H3: FC<Props> = ({
  children,
  color,
  isCenter,
  className,
  style,
}) => {
  return (
    <h3
      style={{
        fontWeight: 500,
        ...style,
      }}
      className={`text-xl ${colorFn(color)} ${centerFn(
        isCenter
      )} ${className}`}
    >
      {children}
    </h3>
  );
};

/**
 * TODO:スタイル未調整！！！！！！
 */

/**
 * H4
 * - font-size: 28px
 * - font-weight: bold
 * - line-height: 32px
 */
export const H4: FC<Props> = ({
  children,
  color,
  isCenter,
  className,
  style,
}) => {
  return (
    <h4
      style={{
        fontWeight: 500,
        ...style,
      }}
      className={`text-lg ${colorFn(color)} ${centerFn(
        isCenter
      )} ${className}`}
    >
      {children}
    </h4>
  );
};

/**
 * TODO:スタイル未調整！！！！！！
 */

/**
 * H5
 * - font-size: 28px
 * - font-weight: 500
 * - line-height: 32px
 */
export const H5: FC<Props> = ({
  children,
  color,
  isCenter,
  className,
  style,
}) => {
  return (
    <h5
      style={{
        fontWeight: 500,
        ...style,
      }}
      className={`text-lg ${colorFn(color)} ${centerFn(
        isCenter
      )} ${className}`}
    >
      {children}
    </h5>
  );
};

/**
 * TODO:スタイル未調整！！！！！！
 */

/**
 * Body
 * - font-size: 22px
 * - font-weight: bold
 * - line-height: 33px
 */
export const BodyTypo: FC<Props> = ({
  children,
  color,
  isCenter,
  className,
  style,
}) => {
  return (
    <div
      style={{
        fontWeight: 400,
        ...style,
      }}
      className={`text-base ${colorFn(color)} ${centerFn(
        isCenter
      )} ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * TODO:スタイル未調整！！！！！！
 */

/**
 * Body2
 * - font-size: 22px
 * - font-weight: 500
 * - line-height: 33px
 */
export const Body2Typo: FC<Props> = ({
  children,
  color,
  isCenter,
  className,
  style,
}) => {
  return (
    <div
      style={{
        fontWeight: 200,
        ...style,
      }}
      className={`text-base ${colorFn(color)} ${centerFn(
        isCenter
      )} ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * TODO:スタイル未調整！！！！！！
 */

/**
 * Caption
 * - font-size: 16px
 * - font-weight: bold
 * - line-height: 24px
 */
export const Caption: FC<Props> = ({
  children,
  color,
  isCenter,
  className,
  style,
}) => {
  return (
    <div
      style={{
        fontWeight: 400,
        ...style,
      }}
      className={`text-sm ${colorFn(color)} ${centerFn(
        isCenter
      )} ${className}`}
    >
      {children}
    </div>
  );
};
